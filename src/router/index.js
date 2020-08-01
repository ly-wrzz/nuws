import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import("@/components/HelloWorld")
    },
    {
      path: '/policy/index',
      name: 'Policy',
      component: () => import("@/pages/policy/Index")
    },
    {
      path: '/policy/search',
      name: 'PolicySearch',
      component: () => import("@/pages/policy/Search")
    },
    {
      path: '/policy/detail',
      name: 'PolicyDetail',
      component: () => import("@/pages/policy/Detail")
    },
    {
      path: '/subsidy/index',
      name: 'Subsidy',
      component: () => import("@/pages/subsidy/index")
    },
    {
      path: '/subsidy/projectList',
      name: 'ProjectList',
      component: () => import("@/pages/subsidy/projectList")
    },
    {
      path: '/subsidy/projectId',
      name: 'ProjectId',
      component: () => import("@/pages/subsidy/projectId")
    },
    {
      path: '/subsidy/serverd',
      name: 'Serverd',
      component: () => import("@/pages/subsidy/serverd")
    },
    {
      path: '/subsidy/document',
      name: 'Document',
      component: () => import("@/pages/subsidy/document")
    }
  ]
})
