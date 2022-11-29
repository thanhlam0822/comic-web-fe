import {createRouter, createWebHistory, RouteRecordRaw, useRoute} from 'vue-router'


const CustomerLayout = () => import('../layout/UserLayout.vue')
const AdminPage = () => import  ('@/layout/AdminLayout.vue')
const UserControl = () => import  ('@/components/admin/UserController.vue')
const DashBoard = () => import  ('@/components/admin/AdminPage.vue')
const EditUser = () => import ('@/components/admin/UserEdit.vue')
const ComicFilter = () => import('@/components/user/ComicFilter.vue')

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: "/customer"

    },

    {
        path: "/customer",
        component: CustomerLayout,
    },
    {
        path: "/admin",
        component: AdminPage,
        children: [
            {path: 'user-control', component: UserControl},
            {path: 'dashboard', component: DashBoard},
            {path:'edit-user/:id',component:EditUser}

        ],
        redirect: '/admin/dashboard'

    },
    {
        path:"/search-comic",


        component:ComicFilter
    }


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
