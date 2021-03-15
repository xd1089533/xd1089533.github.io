module.exports = [
  ['link', { rel: 'icon', href: '/img/xxx.jpg' }], //favicons，资源放在public文件夹
  ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1,user-scalable=no' }],//移动栏优化
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  // 引入jquery
  ["script", {"language": "javascript","type": "text/javascript","src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"}],
  ['link', { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css" }],
  // 引入鼠标点击脚本
  ["script", {
    "language": "javascript",
    "type": "text/javascript",
    "src": "/js/MouseClickEffect.js"
  },{
    "language": "javascript",
    "type": "text/javascript",
    "src": "/js/bandonSelect.js"
  }],
]
