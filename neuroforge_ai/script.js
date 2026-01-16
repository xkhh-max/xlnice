// 获取DOM元素
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const contactForm = document.getElementById('contactForm');

// 移动端导航菜单切换
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 点击导航链接后关闭移动端菜单
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// 标签页切换功能
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 移除所有激活状态
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // 添加当前按钮的激活状态
        btn.classList.add('active');
        
        // 显示对应的标签内容
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(`${tabId}-content`).classList.add('active');
    });
});

// 表单提交处理
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 获取表单数据
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // 这里可以添加实际的表单提交逻辑
        console.log('表单提交:', { name, email, message });
        
        // 显示提交成功的反馈
        alert('感谢您的留言！我们会尽快与您联系。');
        
        // 重置表单
        contactForm.reset();
    });
}

// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 12, 41, 0.95)';
        navbar.style.padding = '10px 0';
    } else {
        navbar.style.background = 'rgba(15, 12, 41, 0.9)';
        navbar.style.padding = '20px 0';
    }
});

// 特性卡片悬停效果增强
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// 优势项目悬停效果
const advantageItems = document.querySelectorAll('.advantage-item');
advantageItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
    });
});

// 社交媒体图标悬停效果
const socialIcons = document.querySelectorAll('.social-icons a');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'translateY(-5px)';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'translateY(0)';
    });
});

// CTA按钮点击效果
const ctaBtn = document.querySelector('.cta-btn');
if(ctaBtn) {
    ctaBtn.addEventListener('click', () => {
        // 滚动到联系表单部分
        document.getElementById('contact').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// 页面加载完成后执行动画
document.addEventListener('DOMContentLoaded', function() {
    // 触发英雄区域文字淡入效果
    const heroContent = document.querySelector('.hero-content');
    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 300);
});
