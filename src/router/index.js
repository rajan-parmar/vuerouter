import Vue from "vue";
import VueRouter from "vue-router";
import ProductTable from "@/components/ProductTable.vue";
import ProductForm from "@/components/ProductForm.vue";
import ProductCarts from "@/components/ProductCarts.vue";
import ProductEdit from "@/components/ProductEdit.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: ProductTable
    },
    {
        path: "/add",
        name: "add",
        component: ProductForm
    },
    {
        path: "/cart",
        name: "cart",
        component: ProductCarts
    },
    {
        path: "/edit/:productId",
        name: "edit",
        component: ProductEdit
    }
];

const router = new VueRouter({
    routes
});

export default router;
