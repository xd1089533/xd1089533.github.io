module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: '/img/xxx.jpg' }], //favicons，资源放在public文件夹
  ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1,user-scalable=no' }],//移动栏优化
  ['meta', { name: 'keywords', content: '程序员博客,技术博客,网站搭建,Java开发,SSM,Spring,Spirng MVC,Mybatis,Spring boot,Web开发,Web后端,程序员自媒体,后端面试题,技术文档,vue,vuepress,markdown', },],
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  // 引入jquery
  ["script", {"language": "javascript","type": "text/javascript","src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"}],
  ['link', { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css" }],
  ['script', { src: "https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js" }],
  // 引入鼠标点击脚本
  ["script", {
    "language": "javascript",
    "type": "text/javascript",
    "src": "/js/MouseClickEffect.js"
  }],
]
