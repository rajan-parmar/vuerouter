<template>
    <div class="container">
        <ProductCarts/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import ProductCarts from "@/components/ProductCarts.vue";

    export default {
        name: "Cart",
        components: {
            ProductCarts
        }
    };
</script>
