import {createRouter, createWebHistory, RouteRecordRaw, useRoute} from 'vue-router'


const CustomerLayout = () => import('../layout/UserLayout.vue')
const AdminPage = () => import  ('@/layout/AdminLayout.vue')
const UserControl = () => import  ('@/components/admin/UserAdd.vue')
const DashBoard = () => import  ('@/components/admin/AdminPage.vue')
const EditUser = () => import ('@/components/admin/UserEdit.vue')
const ComicFilter = () => import('@/layout/ComicFilterLayout.vue')
const CategoryController = () => import('@/components/admin/CategoryAdd.vue')
const UserList = () => import('@/components/admin/UserList.vue')
const CategoryList = () => import('@/components/admin/CategoryList.vue')
const CategoryEdit = () => import('@/components/admin/CategoryEdit.vue')
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
            {path: 'user-add', component: UserControl},
            {path: 'dashboard', component: DashBoard ,
                children: [
                    {path:"user-list",component:UserList},
                    {path:"category-list",component:CategoryList}
                ]},
            {path: 'category-add',component:CategoryController}

        ],
        redirect: '/admin/dashboard/user-list'

    },
    {
        path:"/search-comic",
        name:"ComicFilter",

        component:ComicFilter
    },
    {
        path: '/edit-user/:id',
        component:EditUser
    },
    {
        path: '/edit-category/:id',
        component:CategoryEdit
    }


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
