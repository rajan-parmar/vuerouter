<template>
    <div class="container">
        <ProductEdit/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import ProductEdit from "@/components/ProductEdit.vue";

    export default {
        name: "Edit",
        components: {
            ProductEdit
        }
    };
</script>
