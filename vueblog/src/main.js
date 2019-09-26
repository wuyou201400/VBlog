import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import './styles/element-variables.scss'
import 'font-awesome/css/font-awesome.min.css'
import './utils/filter_utils.js'

Vue.use(ElementUI)
// 开发环境下，Vue 会提供很多警告来帮你对付常见的错误与陷阱。而在生产环境下，这些警告语句却没有用，反而会增加应用的体积。
// 此外，有些警告检查还有一些小的运行时开销，这在生产环境模式下是可以避免的。(摘于官网说明)
// 大概意思应该就是，消息提示的环境配置，设置为开发环境或者生产环境
Vue.config.productionTip = false
window.bus = new Vue();//全局bus
// window.Vue.prototype.bus = new Vue();   //原型bus
//这里需要注意的是 window.bus=new Vue () 这行代码的位置有讲究，不能把它放在 const app=new Vue ({...}); 之后
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
