import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LinkList from '@/components/LinkList'
import LinkPay from '@/components/LinkPay'
import QueryInfo from '@/components/QueryInfo'
import PayInfo from '@/components/PayInfo'
import LinkDetails from '@/components/LinkDetails'



//
import Work from '@/components/work/work.vue'
import Company from '@/components/company/company.vue'
import Database from '@/components/database/database.vue'
Vue.use(Router)


const  routes = [
    {
      path: '/',    //主页
      name: 'home',
      component: Home
    },
      {
        path: '/linklist',  //关联方列表
        name: 'list',
        component: LinkList,
        props: true

      },
    {
        path: '/detail/:uid',  //关联数据
        name: 'link-details',
        component: LinkDetails ,
        // props: true
    },
      {
          path: '/linkpay', //关联交易
          name: 'pay',
          component: LinkPay,

      },
    {
        path: '/payinfo',  //关联信息
        name: 'payinfo',
        component: PayInfo

    },
    {
        path: '/querylist', // 查询
        name: 'query',
        component: QueryInfo
    },

    {
        path: '/gtasks',  //待办
        name: 'Work',
        component: Work
    },
    {
        path: '/company/:id',
        name: 'company',
        component: Company
    },
    {
        path: '/infobase', //信息库
        name: 'database',
        component: Database
    },


]
export default new Router({
    // mode: 'history',
    routes
})

