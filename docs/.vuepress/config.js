module.exports = {
    title: '前端面经',
    head: [
        ['link', { rel: 'apple-touch-icon', sizes: "128x128", href: '/assets/img/book-128x128.png' }],
        ['link', { rel: 'shortcut icon', href: '/assets/img/favicon.ico' }]
    ],
    description: '前端面经',
    themeConfig: {
        nav: [
            { text: '基础', link: '/Basic' },
            { text: '工程', link: '/Engineering' },
            { text: '网络', link: '/Network' },
            { text: '优化', link: '/Optimize' },
            { text: '算法', link: '/Algorithms' },
            { text: '全栈', link: '/Fullstack'},
            { text: '关于', link: '/About'}
        ],
        sidebar: {
            '/': [
                "Basic", "Engineering", "Network", "Optimize", "Algorithms", "Fullstack", "About"
            ]
        },
        sidebarDepth: 4,
    },
    base: '/WebInterview/'
  }