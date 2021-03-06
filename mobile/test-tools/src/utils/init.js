import initFastClick from './fastclick';
import dealHtmlFontSize from './dealHtmlFontSize';

function init(params) {
  window.APP = {
    vConsole:{},
    eruda:{}
  }
  initFastClick()
  dealHtmlFontSize({ window: window, designWidth: 375 })
}

`javascript:(function () { var script = document.createElement('script'); script.src="http://eruda.liriliri.io/eruda.min.js"; document.body.appendChild(script); script.onload = function () { eruda.init() } })();`

// if(!window.Promise) {
//   document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
// }

function createScript(src) {
  var script = document.createElement('script')
  script.setAttribute("type", "text/javascript")
  script.src = src
  document.body.appendChild(script)
  // process.env.NODE_ENV === "production" || console.log(script)
}
// 判断支付宝引入
createScript('https://a.alipayobjects.com/g/h5-lib/alipayjsapi/3.0.6/alipayjsapi.inc.min.js')

// process.env.NODE_ENV === "production" || console.log('done!')

export default init
