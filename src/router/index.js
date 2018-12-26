import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ArtList from '../page/artInfoList/index'
import Index from '../page/index'
import editArt from '../page/editArt'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/artList',
      name: 'artList',
      component: ArtList
    },
    {
      path: '/editArt',
      name: 'editArt',
      component: editArt
    }
  ]
})
