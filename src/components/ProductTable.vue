<template>
    <div>
        <table class="table table-striped table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Name Image</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                <tr v-if="!allProducts.length">
                    <td colspan="5" class="text-center">No Records</td>
                </tr>

                <tr v-for="(product, index) in allProducts" :key="product.id">
                    <td>{{ product.id }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.price | currency }}</td>
                    <td>
                        <img :src="product.url" width="50px" height="50px"/>
                    </td>
                    <td>
                        <button class="btn btn-warning mr-2" title="Edit Product" @click="editProduct(product.id)">
                            <i class="fas fa-edit text-light"></i>
                        </button>

                        <button class="btn btn-danger mr-2" title="Delete Product" @click="removeProduct(product.id)">
                            <i class="fas fa-trash-alt text-light"></i>
                        </button>

                        <button class="btn btn-primary" title="Add To Cart" @click="addToCart(product, index)">
                            <i class="fas fa-shopping-cart text-light"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "products",
        filters: {
            currency:function(value) {
                return '$' + parseFloat(value).toFixed(2);
            }
        },
        computed: mapGetters(["allProducts", "allCarts"]),
        methods: {
            addToCart(product) {
                let itemInCart = this.allCarts.filter(item => item.id === product.id);

                let isItemInCart = itemInCart.length > 0;

                if (isItemInCart === false) {
                    this.$store.commit('addToCart', product);

                    this.$toasted.success('Item Added to the cart successfully', {
                        position: 'top-right',
                        duration: 900
                    });
                } else {
                    itemInCart[0].qty += product.qty;

                    this.$store.commit('cartQuantityPlus', itemInCart[0].qty);

                    this.$toasted.success('Item Updated to the cart successfully', {
                        position: 'top-right',
                        duration: 900
                    });
                }
                this.$router.push("/cart");
            },
            removeProduct(productId) {
                this.$store.commit('removeProduct', productId);

                this.$toasted.success('Product removed successfully', {
                    position: 'top-right',
                    duration: 900
                });
            },
            editProduct(productId) {
                this.$router.push("/edit/" + productId);
            }
        }
    };
</script>
