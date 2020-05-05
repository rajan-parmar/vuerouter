<template>
    <div class="container">
        <ProductForm/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import ProductForm from "@/components/ProductForm.vue";

    export default {
        name: "Add",
        components: {
            ProductForm
        }
    };
</script>
