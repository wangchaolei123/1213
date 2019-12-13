import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const login = () => import("../pages/login.vue")
const index = () => import("../pages/index.vue")
const manage = () => import("../pages/manage.vue")
// const welcome = () => import("../pages/welcome.vue")
const banner = () => import("../pages/banner.vue")
const familyEducation = () => import("../pages/familyEducation.vue")
const waterStation = () => import("../pages/waterStation.vue")
const repair = () => import("../pages/repair.vue")
const housekeeping = () => import("../pages/housekeeping.vue")
const modifyPassword = () => import("../pages/modifyPassword.vue")
// const admin = () => import("../pages/admin.vue")

export default new Router({
    routes: [
        {
            path: "/login",
            component: login
        },
        {
            path: "/index",
            component: index,
            children: [
                {
                    path: "manage",
                    component: manage
                },
                // {
                //     path: "welcome",
                //     component: welcome
                // },
                // banner
                {
                    path: "banner",
                    component: banner
                },
                // 家教管理
                {
                    path: "familyEducation",
                    component: familyEducation
                },
                // 水站管理
                {
                    path: "waterStation",
                    component: waterStation
                },
                // 维修
                {
                  path: "repair",
                  component: repair
                },
                // 家政管理
                {
                  path: "housekeeping",
                  component: housekeeping
                },
                // 修改密码
                {
                  path: "modifyPassword",
                  component: modifyPassword
                },
                // 管理员管理
                // {  path: "admin",
                //   component: admin
                // }
            ]
        },
        {
            path: "*",
            redirect: "/login"
        }
    ]
})
