import Vue from 'vue'
import Router from 'vue-router'

import ShelfView from '../views/ShelfView'
import CommunityView from '../views/CommunityView'
import FindView from '../views/FindView'
import UserView from '../views/UserView'
import SearchView from '../views/SearchView'
import BookView from '../views/BookView'
import categories from '../views/categories'
import subCategories from '../views/subCategories'
import chapter from '../views/chapter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/shelf'
    },
    {
      path: '/shelf',
      name: 'ShelfView',
      component: ShelfView
    },
    {
      path: '/community',
      name: 'CommunityView',
      component: CommunityView
    },
    {
      path: '/find',
      name: 'FindView',
      component: FindView
    },
    {
      path: '/categories',
      component: categories
    },
    {
      path: '/cate-info',
      component: subCategories
    },
    {
      path: '/chapter/:id',
      component: chapter
    },
    {
      path: '/user',
      name: 'UserView',
      component: UserView
    },
    {
      path: '/search',
      name: 'SearchView',
      component: SearchView
    },
    {
      path: '/book/:id',
      name: 'BookView',
      component: BookView
    }
    // {
    //   path: '*',
    //   redirect: '/shelf'
    // }
  ]
})
