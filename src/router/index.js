/**路由器对象  */
import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../pages/Msite/Home.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {//问题没解决 多次点击router 时报冗余错误
  return originalPush.call(this, location).catch(err => err)
}


Vue.use(Router)

export default new Router({

  

 routes:[//路由路径

   {
     path:'/msite',
     component:Msite,
     meta:{
      showwFooter:true
     }
   },
   {
    path:'/order',
    component:Order,
    meta:{
     showwFooter:true
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
     showwFooter:true
    }

  },
  {
    path:'/msite',
    component:Msite,
    meta:{
     showwFooter:true
    }

  },
  {
    path:'/search',
    component:Search,
    meta:{
     showwFooter:true
    }
  },
  {//登录界面路由
    path:'/login',
    component:Login
  },
  {
    path:'/',
     redirect:'/Msite'
  }
 ]
})

