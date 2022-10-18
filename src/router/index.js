import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/home',
		name: 'home',
		component: HomeView
	},
	{
		path: '/',
		redirect:'/home'
	},
	{
		path: '/list',
		name: 'List',
		component: () => import('../views/list.vue')
	},
	{
		path: '/cart',
		name: 'Cart',
		component: () => import('../views/cart.vue')
	},
	{
		path: '/my',
		name: 'My',
		component: () => import('../views/my.vue')
	},
	{
		path:'/Search',
		name:'Search',
		children:[
			{
				path:'/',
				name:'index',
				component:() => import('../views/search/Srarch-index')
			},
			{
				path:'/list',
				name:'list',
				component:() => import('../views/search/search-list')
			}
		],
		component: () => import('../views/Search.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
