import { createRouter, createWebHistory } from 'vue-router';
// import LogIn from '../views/LogIn.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		meta: {
			layout: 'main'
		},
		component: () => import('../views/Home.vue')
	},
	{
		path: '/login',
		name: 'login',
		meta: {
			layout: 'empty'
		},
		component: () => import('../views/Login.vue')
	},
	{
		path: '/categories',
		name: 'categories',
		meta: {
			layout: 'main'
		},
		component: () => import('../views/Categories.vue')
	},
	{
		path: '/detail',
		name: 'detail',
		meta: {
			layout: 'main'
		},
		component: () => import('../views/Detail.vue')
	},
	{
		path: '/history',
		name: 'history',
		meta: {
			layout: 'main'
		},
		component: () => import('../views/History.vue')
	},
	{
		path: '/planning',
		name: 'planning',
		meta: {
			layout: 'main'
		},
		component: () => import('../views/Planning.vue')
	},
	{
		path: '/record',
		name: 'record',
		meta: {
			layout: 'main'
		},
		component: () => import('../views/Record.vue')
	},
	{
		path: '/register',
		name: 'register',
		meta: {
			layout: 'empty'
		},
		component: () => import('../views/Register.vue')
	}
];

const router = createRouter({
	// hash: false,
	history: createWebHistory(),
	routes
});

export default router;
