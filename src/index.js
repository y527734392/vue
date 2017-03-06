import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routers'; // 引入路由配置
import './common/css/index.less'; // 引入公共样式
import './common/js/jquery.js'; // 引入公共样式
Vue.use(VueRouter);


// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
    router
}).$mount('#app');

// 现在，应用已经启动了！