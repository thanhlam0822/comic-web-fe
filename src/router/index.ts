import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'


const CustomerLayout = () => import('../layout/CustomerLayout.vue')
const AdminPage = () => import  ('@/components/AdminPage.vue')
const UserControl = () => import  ('@/components/layout/UserControl.vue')
const DashBoard = () => import  ('@/components/layout/DashBoard.vue')
const EditUser = () => import ('@/components/layout/EditUser.vue')
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
            {path: '/user-control', component: UserControl},
            {path: '/dashboard', component: DashBoard},
            {path:'/edit-user/:id',component:EditUser}

        ],
        redirect: '/dashboard'

    }


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
