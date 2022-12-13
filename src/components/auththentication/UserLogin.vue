<template>
  <form @submit.prevent="handleLogin">
   Username: <input type="text" v-model="user.username" >
    Password : <input type="password" v-model="user.password" >
    <button>Login</button>
  </form>
</template>

<script lang="ts" setup>
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import AuthService from "@/services/auth.service.js"
import {reactive, ref} from "vue";
import axios from "axios";
// let username = ref('')
// let password = ref('')
let user = reactive({
  username: '',
  password: ''
})
const store = useStore();
const router =  useRouter()
 function handleLogin() {
  store.dispatch("auth/login",user)
   router.push("/profile")
 }
</script>

<style scoped>

</style>