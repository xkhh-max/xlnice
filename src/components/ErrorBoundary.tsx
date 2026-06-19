import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  name?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * 通用错误边界组件
 * 包裹独立区块，防止某个模块崩溃导致整个页面白屏
 */
export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`[ErrorBoundary:${this.props.name || 'unknown'}]`, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-8 rounded-2xl border border-red-900/30 bg-red-950/10 text-center">
          <p className="text-red-400 text-sm mb-2">😵 区块加载异常</p>
          <p className="text-white/30 text-xs">{this.props.name || 'unknown'}</p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="mt-4 px-4 py-2 rounded-lg border border-white/10 text-white/50 text-xs hover:bg-white/5 transition-colors"
          >
            重试
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
