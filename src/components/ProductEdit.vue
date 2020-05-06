<template>
    <div class="col-lg-5 form-section">
        <h3 class="font-weight-bold">Product Edit Form :</h3>

        <form @submit.prevent="editNewProduct">
            <div class="form-group">
                <label class="font-weight-bold">Name:</label>
                <input type="text" class="form-control" placeholder="Insert Name" v-model="fetchProduct[0].name"/>
            </div>

            <div class="form-group">
                <label class="font-weight-bold">Price:</label>
                <input type="number" class="form-control" placeholder="Insert Price" v-model="fetchProduct[0].price"/>
            </div>

            <div class="form-group">
                <label class="font-weight-bold">Image Url:</label>
                <input type="text" class="form-control" placeholder="Insert Image Url" v-model="fetchProduct[0].url"/>
            </div>

            <div class="text-center">
                <button type="submit" class="btn btn-primary mr-4">Update</button>
                <button class="btn btn-secondary" @click="goHome()">Cancel</button>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
            };
        },
        methods: {
            editNewProduct() {
                this.$store.commit('updateProduct', this.$route.params.productId);

                this.$toasted.success('Product Updated Successfully', {
                    position: 'top-right',
                    duration: 900
                });

                this.$router.push("/");
            },
            goHome() {
                this.$router.push("/");
            },
        },
        computed: {
            fetchProduct() {
                return this.$store.state.module1.editProduct;
            }
        }
    };
</script>
<style>
    .form-section {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
        border-radius: 1%;
    }
</style>
