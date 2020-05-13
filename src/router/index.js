import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/components/Login.vue";
import ProductTable from "@/components/ProductTable.vue";
import ProductForm from "@/components/ProductForm.vue";
import ProductCarts from "@/components/ProductCarts.vue";
import ProductEdit from "@/components/ProductEdit.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login,
    },
    {
        path: "/home",
        name: "Home",
        component: ProductTable,
        meta: {
            auth: true
        }
    },
    {
        path: "/add",
        name: "add",
        component: ProductForm,
        meta: {
            auth: true
        }
    },
    {
        path: "/cart",
        name: "cart",
        component: ProductCarts,
        meta: {
            auth: true
        }
    },
    {
        path: "/edit/:productId",
        name: "edit",
        component: ProductEdit,
        meta: {
            auth: true
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('user')

    if (to.matched.some(record => record.meta.auth) && !loggedIn) {
        next('/')
        return
    }
    next()
})
export default router;
