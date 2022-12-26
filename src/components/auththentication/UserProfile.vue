<template>
  <button @click.prevent="logout">Logout</button>
  {{currentUser}}
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.username}}</strong> Profile
      </h3>
    </header>

    <p>
      <strong>Id:</strong>
      {{currentUser.id}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.gmail}}
    </p>
    <strong>Role:</strong>
      {{currentUser.role}}
  </div>
</template>

<script lang="ts" setup>
import AuthService from '@/services/auth.service.js'

import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {computed, ref} from "vue";
const store = useStore()
const router = useRouter()
let currentUser = computed(() => {
  return store.state.auth.user
})
function logout() {
  store.dispatch('auth/logout')
  router.push("/login")
}
</script>

<style scoped>

</style>