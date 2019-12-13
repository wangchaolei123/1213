// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import './assets/css/reset.css'
import 'animate.css'
import axios from 'axios'
import qs from 'qs'
Vue.prototype.$qs = qs;
Vue.prototype.$axios=axios;
Vue.config.productionTip = false
// axios.interceptors.response.use(response=>{
//   console.log("------------请求数据回来啦"+response.config.url+"--------------");
//   console.log(response);
//   console.log("-------over--------");

//   if(response.data.code==-1){
//     router.replace("/login")
//     return;
//   }
  
//   return response
  
// })
//全局守卫-登录拦截
// router.beforeEach((to, from, next) => {
//   if(to.path=='/login'){
//     next();
//     return;
//   }
//   if(!localStorage.getItem("isAdmin")){
//     next('/login');
//     return;
//   }
//   next()
  
// })


// import Filter from './filter'
// for(let i in Filter){
//   Vue.filter(i,Filter[i])
// }

// import component from './component'
// for(let i in component){
//   Vue.component(i,component[i])
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
