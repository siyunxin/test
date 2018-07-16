import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import LinkPay from '@/components/linkpay/LinkPay'
import QueryInfo from '@/components/linklist/QueryInfo'
import PayInfo from '@/components/linkpay/PayInfo'
import LinkDetails from '@/components/linklist/LinkDetails'
import LinkList from '@/components/linklist/Linklist'


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
    {
        path: '/linklist',
        name: 'linklist',
        component: LinkList
    },
    {
        path: '/linklist/:id',
        name:'linklistid',
        component: LinkDetails
    }


]
export default new Router({
    // mode: 'history',
    routes
})

