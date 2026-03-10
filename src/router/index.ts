import { createRouter, createWebHashHistory} from "vue-router"
import Login from "../pages/Login.vue"
import Cadastro from "../pages/Cadastro.vue"



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
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router