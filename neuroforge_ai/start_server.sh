#!/bin/bash

# 创建并启动简单的HTTP服务器来预览网站
cd /home/admin/workspace/neuroforge_ai

# 检查是否有其他进程占用了8080端口
lsof -i :8080 > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "Port 8080 is already in use. Finding and killing the process..."
    lsof -ti:8080 | xargs kill -9 2>/dev/null || true
fi

echo "Starting server on http://localhost:8080"
python3 -m http.server 8080 &
SERVER_PID=$!

# 等待服务器启动
sleep 2

# 输出提示信息
echo "Server is running with PID $SERVER_PID"
echo "Access the website at: http://localhost:8080"

# 启动后台任务来保持服务器运行一段时间
(
    sleep 3600  # 让服务器运行1小时
    kill $SERVER_PID 2>/dev/null || true
    echo "Server stopped after 1 hour."
) &

trap "kill $SERVER_PID 2>/dev/null || true; exit" INT TERM EXIT

# 保持前台进程活跃
while kill -0 $SERVER_PID 2>/dev/null; do
    sleep 1
done
