module.exports = {
    title: '前端面经',
    description: '前端面经',
    logo: '/assets/img/logo.png',
    themeConfig: {
        nav: [
            { text: '语法', link: '/Grammar' },
            { text: '框架', link: '/Framework' },
            { text: '算法', link: '/Algorithms' },
            { text: '关于', link: '/About'}
        ],
        sidebar: {
            '/': [
                "Grammar", "Framework", "Algorithms", "About"
            ]
        },
        sidebarDepth: 2,
    },
    base: '/WebInterview/'
  }