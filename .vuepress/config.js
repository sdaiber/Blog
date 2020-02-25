/**
 * @file VuePress Config
 */
module.exports = {
  title: 'Jack\'s Blog',
  description: 'LifeLong Learn.',
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: 'CSDN', link: 'https://blog.csdn.net/qq_26377547' },
      { text: 'GitHub', link: 'https://github.com/wjq990112' }
    ],
    sidebar: [
      ['/', '目录'],
      ['html/', 'HTML'],
      ['css/', 'CSS']
    ],
    sidebarDepth: 2
  }
}
