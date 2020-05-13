<template>
    <div class="col-lg-5 form-section">
        <h3 class="font-weight-bold">Product Form :</h3>

        <form @submit.prevent="addNewProduct">
            <div class="form-group">
                <label class="font-weight-bold">Name:</label>
                <input type="text" class="form-control" placeholder="Insert Name" v-model="name"/>
            </div>

            <div class="form-group">
                <label class="font-weight-bold">Price:</label>
                <input type="number" class="form-control" placeholder="Insert Price" v-model="price"/>
            </div>

            <div class="form-group">
                <label class="font-weight-bold">Image Url:</label>
                <input type="text" class="form-control" placeholder="Insert Image Url" v-model="url"/>
            </div>

            <div class="text-center">
                <button type="submit" class="btn btn-primary mr-4">Submit</button>
                <button class="btn btn-secondary" @click="goHome()">Cancel</button>
            </div>
        </form>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
                name: "",
                price: "",
                url: "",
            };
        },
        computed: {
            ...mapGetters(['allProducts'])
        },
        methods: {
            addNewProduct() {
                if (this.name == "" || this.price == "" || this.url == "") {
                    this.$toasted.error('Please fill blank field', {
                        position: 'top-right',
                        duration: 900
                    });
                } else {
                    let uniqueId = this.allProducts.length + 1;
                    this.$store.commit('addToNew', {
                        id: uniqueId,
                        name: this.name,
                        price: this.price,
                        url: this.url,
                        qty: 1
                    });

                    this.$toasted.success('Product Inserted Successfully', {
                        position: 'top-right',
                        duration: 900
                    });

                    this.name = "";
                    this.price = "";
                    this.url = "";

                    this.$router.push("/home");
                }
            },
            goHome() {
                this.$router.push("/home");
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
