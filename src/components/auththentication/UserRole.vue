<template>
  {{ content }}
</template>

<script lang="ts" setup>
import {ref} from "vue";

let content = ref('')
import UserService from '@/services/user.service.js'
import axios from 'axios'
UserService.getUserBoard().then(response => content.value = response.data)
</script>

<style scoped>

</style>