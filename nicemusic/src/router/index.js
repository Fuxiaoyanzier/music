import Vue from 'vue';
import VueRouter from 'vue-router';

import FoundMusic from '../views/foundMusic'
import Rank from '../views/rank'
import Album from '../views/album'
import Singer from '../views/singer'
import Login from '../views/login';

// 测试right left插件
import leftRight from '../components/2/leftRight'

//Vue中安装路由插件
Vue.use(VueRouter);
//路由配置
var routes = [{
        path: '/home',
        name: 'home',
        component: FoundMusic,
    },
    {
        path: '/rank',
        component: Rank,
    },
    {
        path: '/album',
        component: Album,
    },
    {
        path: '/singer',
        component: Singer,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        //     meta: {
        //       title: '登录',
        //       isLogin: true
        //  }
    },
    {
        path: '/leftRight',
        name: 'leftRight',
        component: leftRight,
    }

]

const originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location) {
    originPush.call(this, location).catch(err => err);
}

//创建路由对象

originPush.call(this, location).catch(err => err);

//创建路由对象
const router = new VueRouter({
    mode: 'history',
    routes
})


export default router;