import { createRouter, createWebHashHistory} from "vue-router"
import Login from "../pages/Login.vue"
import Cadastro from "../pages/Cadastro.vue"
import DashBoard from "../pages/DashBoard.vue"



const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/cadastro',
        component: Cadastro
    },
    {
        path: '/dashboard',
        component: DashBoard
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router