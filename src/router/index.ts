import {createRouter, createWebHistory, RouteRecordRaw, useRoute} from 'vue-router'


const CustomerLayout = () => import('../layout/UserLayout.vue')
const AdminPage = () => import  ('@/layout/AdminLayout.vue')
const UserControl = () => import  ('@/components/admin/UserAdd.vue')
const DashBoard = () => import  ('@/components/admin/AdminPage.vue')
const EditUser = () => import ('@/components/admin/UserEdit.vue')
const ComicFilter = () => import('@/components/user/ComicFilter.vue')
const CategoryController = () => import('@/components/admin/CategoryAdd.vue')
const UserList = () => import('@/components/admin/UserList.vue')
const UserLogin  = () => import('@/components/auththentication/UserLogin.vue')
const UserProfile  = () => import('@/components/auththentication/UserProfile.vue')
const CategoryList = () => import('@/components/admin/CategoryList.vue')
const CategoryEdit = () => import('@/components/admin/CategoryEdit.vue')
const ComicListCo  = () => import('@/components/admin/ComicListCo.vue')
const ComicAdd  = () => import('@/components/admin/ComicAdd.vue')
const ComicEdit = () => import('@/components/admin/ComicEdit.vue')
// const AdminRole  = () => import('@/components/auththentication/AdminRole.vue')
// const UserRole = () => import('@/components/auththentication/UserRole.vue')
const ComicDetail = () => import("@/components/user/ComicDetail.vue")
const ComicChapterDetail = () => import("@/components/user/ComicChapterDetail.vue")
const ComicRead = () => import("@/components/user/ComicRead.vue")
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
                    {path:"category-list",component:CategoryList},
                    {path:"comic-list",component:ComicListCo},

                ]},
            {path: 'category-add',component:CategoryController},
            {path:"comic-add",component:ComicAdd}

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
    },
    {
        path: '/edit-comic/:id',
        component:ComicEdit
    },
    {
        path: "/login",
        component: UserLogin
    },
    {
        path: "/profile",
        component: UserProfile
    },
    {
        path:"/comic-detail/",
        children: [
            {path: ":id/", component: ComicDetail },
            {path:"chapter/:chapterId",component:ComicChapterDetail}
        ],
        component: ComicRead
    },




]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
