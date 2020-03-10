/**
 * @file VuePress Config
 */
module.exports = {
  title: "Jack's Blog",
  description: 'LifeLong Learn.',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: 'CSDN', link: 'https://blog.csdn.net/qq_26377547' },
      { text: 'GitHub', link: 'https://github.com/wjq990112' }
    ],
    sidebar: [
      ['list/', '目录'],
      {
        title: 'HTML',
        collapsable: true,
        children: [['html/001', 'HTML5 新特性']]
      },
      {
        title: 'CSS',
        collapsable: true,
        children: [['css/001', 'CSS 制作动画常用技巧']]
      },
      {
        title: 'JavaScript',
        collapsable: true,
        children: [['javascript/001', 'JavaScript 数据类型']]
      },
      {
        title: 'Vue',
        collapsable: true,
        children: [['vue/001', 'Vue 响应式原理']]
      }
    ]
  }
}
