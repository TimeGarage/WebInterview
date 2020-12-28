module.exports = {
    title: '前端面经',
    description: '前端面经',
    logo: '/assets/img/logo.png',
    themeConfig: {
        nav: [
            { text: '基础', link: '/Basic' },
            { text: '框架', link: '/Framework' },
            { text: '网络', link: '/Network' },
            { text: '算法', link: '/Algorithms' },
            { text: '关于', link: '/About'}
        ],
        sidebar: {
            '/': [
                "Basic", "Framework", "Network", "Algorithms", "About"
            ]
        },
        sidebarDepth: 2,
    },
    base: '/WebInterview/'
  }