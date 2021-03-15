const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  // theme: 'vdoing', // 使用依赖包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "福利资源下载站点",
  description: '老斯机,福利资源',
  base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
    externalLinks:
    { target: '_blank', rel: 'nofollow noopener noreferrer' }
  },
  head,
  plugins,
  themeConfig,  
}
