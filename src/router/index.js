import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Nofound from '@/components/flienofound'
import Detail from '@/views/detail'
import Index from '@/views/index'
import About from '@/views/about'
import Login from '@/views/login'
import Geren from '@/views/geren'
import Woder from '@/views/woder'
import About1 from '@/components/about/about1'
import About2 from '@/components/about/about2'
import About3 from '@/components/about/about3'

Vue.use(Router)

let router= new Router({
  linkActiveClass:"activeClass",
  mode:"history",
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
     {
      path: '/detail/:gid',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/geren',
      name: 'Geren',
      component: Geren,
      meta:{
            login:true
      }
    },
    {
      path: '/woder',
      name: 'Woder',
      component: Woder,
      meta:{
            login:true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      children:[
        {
          path:"",
          component:About1,
          meta:{
            index:0
          }
        },
         {
          path:"two",
          component:About2,
           meta:{
            index:1
          }
        },
         {
          path:"there",
          component:About3,
           meta:{
            index:2
          }
        },
      ]

      

    },
    {
      path:"*",
      redirect:(to)=>{
        if(to.path=="/aaa"){
          return "/index"
        }else if(to.path=="bbb"){
          return "/about"
        }else{
           return "/about"
        }
      }
    }
  ]
})
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

router.beforeEach((to,from,next)=>{
  if(to.meta.login){
    let info = router.app.$local.fetch("user").userName;
    if(info){
      next();
    }else{
      alert("请先登录");
      router.push("/login");
    }
  }else{
    next();
  }
})
export default router