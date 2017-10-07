import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Work from '@/components/Work'
import Project from '@/components/Project'
import Connect from '@/components/Connect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
			path: '/Work',
			name: 'Work',
			component: Work
    },
    {
    	path: '/project/:projectId',
    	name: 'Project',
    	component: Project
    },
    {
    	path: '/Connect',
    	name: 'Connect',
    	component: Connect
    }
  ]
})
