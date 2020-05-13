<template>
    <div class="col-lg-5">
        <h4>Login</h4>
        <form @submit.prevent="login">
            <div class="form-group">
                <label class="font-weight-bold">E-Mail Address:</label>
                <input type="email" class="form-control" placeholder="Enter Email" v-model="email" required/>
            </div>

            <div class="form-group">
                <label class="font-weight-bold">Password:</label>
                <input type="password" class="form-control" placeholder="Enter Password" v-model="password" required/>
            </div>

            <div>
                <button type="submit" class="btn btn-primary">
                    Login
                </button>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            login() {
                if (this.email == "" || this.password == "") {
                    this.$toasted.error('Please fill blank field', {
                        position: 'top-right',
                        duration: 900
                    });
                } else {
                    this.$axios.get('/sanctum/csrf-cookie').then(() => {
                        this.$axios.post('api/login', {
                            email: this.email,
                            password: this.password
                        })
                        .then(({ data }) => {
                            this.$store.commit("setUserData", data);
                            this.$toasted.success('Login Successfully', {
                                position: 'top-right',
                                duration: 900
                            });

                            this.$router.push({ name: "Home" });
                        })
                        .catch(error => {
                            if (error.response.status === 422) {
                                this.$toasted.error('Enter Valid Email & Password', {
                                    position: 'top-right',
                                    duration: 900
                                });
                            }
                        })
                    });
                }
            }
        }
    }
</script>