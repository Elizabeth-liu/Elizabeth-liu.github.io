module.exports = {
  dest: 'Elizabeth',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Elizabeth',
      description: 'Vue-powered Static Site Generator'
    },
    // '/zh/': {
    //   lang: 'zh-CN',
    //   title: 'VuePress',
    //   description: 'Vue 驱动的静态网站生成器'
    // }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'vuejs/vuepress',
    editLinks: true,
    docsDir: 'docs',
    // #697 Provided by the official algolia team.
    algolia: {
      apiKey: '3a539aab83105f01761a137c61004d85',
      indexName: 'vuepress'
    },
    locales: {
      '/': {
        label: 'English',
        // selectText: 'Languages',
        // editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [
          {
            text: '前端',
            items: [
              { text: 'js', link: '/web/js/' },
              { text: 'browser', link: '/web/browser/' },
              { text: 'css', link: '/web/css/' },
              { text: 'react', link: '/web/react/' },
              { text: 'vue', link: '/web/vue/' },
              { text: 'webpack', link: '/web/webpack/' },
              { text: 'babel', link: '/web/babel/' },
              { text: 'performance', link: '/web/performance/' },
              // { text: '其他', link: '/web/others/' },
            ]
          },
          {
            text: '后端',
            items: [
              { text: 'nodejs', link: '/backend/nodejs/' },
              { text: '其他', link: '/backend/others/' },
            ]
          },
          {
            text: '计算机',
            items: [
              { text: '算法与数据结构', link: '/computer/algorithm/' },
              { text: 'http', link: '/computer/http/' },
              { text: '设计模式', link: '/computer/patterns/' },
              // { text: '其他', link: '/computer/others/' },
            ]
          },
        ],
        // sidebar: 'auto'
        sidebar: {
          '/web/js/': [
            '',
            'promise',
            'iterator',
            'generator',
            'async',
            'class',
            'module',
            'pattern',
            // 'array'
          ],
          '/web/react/': [
            '',
            'dva',
            'redux',
            'react-redux',
            'redux-thunk'
          ],
          '/web/performance/': [
            '',
          ],
          '/web/browser/': [
            '',
            'cache',
            'router',
            'cookie'
          ],
          '/web/babel/': [
            '',
          ],
          '/computer/patterns/': [
            ''
          ],
          '/computer/http/': [
            ''
          ]
        }
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        // editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
          }
        },
        nav: [
          {
            text: '指南',
            link: '/zh/guide/',
          },
          {
            text: '配置',
            link: '/zh/config/'
          },
          {
            text: '默认主题',
            link: '/zh/default-theme-config/'
          },
          {
            text: 'Changelog',
            link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'
          }
        ],
        sidebar: {
          '/zh/guide/': genSidebarConfig('指南')
        }
      }
    }
  }
}

function genSidebarConfig (title) {
  return [{
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'basic-config',
        'assets',
        'markdown',
        'using-vue',
        'custom-themes',
        'i18n',
        'deploy'
      ]
  }]
}
