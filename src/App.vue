<template>
    <div id="app">
        <div class="container">
            <div class="text-center" id="nav">
                <router-link to="/home" v-if="isLoggedIn" class="btn btn-info mr-3">Home</router-link>
                <router-link to="/add" v-if="isLoggedIn" class="btn btn-info mr-3"> Add</router-link>
                <router-link to="/cart" v-if="isLoggedIn" class="btn btn-info mr-3"> Cart</router-link>
                <router-link to="/" v-else></router-link>
                <button class="btn btn-primary" @click="logout()" v-if="isLoggedIn">
                    Logout
                </button>
            </div>
            <router-view />
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isLoggedIn: localStorage.getItem('isLoggedIn') == 'true'
            }
        },
        methods: {
            logout () {
                localStorage.removeItem('isLoggedIn', 'true');
                this.isLoggedIn = false;
                this.$axios.post('/logout');
                this.$router.push('/');
            }
        }
    }
</script>
<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    #nav {
        padding: 30px;
    }
    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }
    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
