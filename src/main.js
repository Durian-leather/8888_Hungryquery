/**入口JS文件 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'



new Vue({
el:"#app",
render:h=> h(App), //渲染 //components: { App }  vue1.0的写法//  render: h => h(App)    vue2.0的写法
router               

})