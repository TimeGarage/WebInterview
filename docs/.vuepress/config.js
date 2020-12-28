module.exports = {
    title: '前端面经',
    description: '前端面经',
    themeConfig: {
        nav: [
            { text: '语法', link: '/Grammar' },
            { text: '框架', link: '/Framework' },
            { text: '算法', link: '/Algorithms'}
        ],
        sidebar: {
            '/': [
                "/", "Grammar", "Framework", "Algorithms" 
            ]
        },
        sidebarDepth: 2,
    },
    base: '/WebInterview/'
  }