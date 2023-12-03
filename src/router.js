import { createWebHistory,createRouter } from 'vue-router'
import Ticket from './components/Ticket.vue'
import Nopage from './components/Nopage.vue'
import Registration from './components/Registration.vue'
import Login from './components/Login.vue'

const routes = [
    {
        path:"/",
        component: Ticket,
        name : "Ticket"
    },
    {
        path:"/:pathMatch(.*)*",
        component: Nopage,
        name : "Nopage"
    },
    {
        path:"/register",
        component: Registration,
        name : "Registration"
    },
    {
        path:"/login",
        component: Login,
        name : "Login"
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router