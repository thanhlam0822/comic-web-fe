<template>
  <h1>ADD USER FORM</h1>
  <el-row justify="center" v-if="success">
    <el-col :span="5" >
      <el-alert title="Update success" type="success" effect="dark" show-icon />
    </el-col>
  </el-row>
  <br>
  <el-form
      :label-position="labelPosition"
      label-width="100px"
      style="max-width: 460px"
      @keyup.enter.prevent="addUser"
  >
    <el-form-item label="Name">
      <el-input v-model="name" />
    </el-form-item>
    <el-form-item label="User Name">
      <el-input v-model="username" />
    </el-form-item>
    <el-form-item label="Password">
      <el-input v-model="password"  />
    </el-form-item>
    <el-form-item label="Gmail">
      <el-input v-model="gmail"  />
    </el-form-item>
    <el-form-item label="Job">
      <el-input v-model="job" />
    </el-form-item>
    <el-form-item label="Position">
      <el-input v-model="position" />
    </el-form-item>

    <el-form-item >
      <el-button @click.prevent="addUser" type="primary " plain>Add User</el-button>
      <el-button @click="goBack" type="primary " plain>Go back</el-button>

    </el-form-item>

  </el-form>




</template>

<script lang="ts" setup>
import {useRoute, useRouter} from 'vue-router'
import { reactive, ref } from 'vue'
import axios from "axios";
const labelPosition = ref('right')
const router = useRouter()
let success = ref(false)
let name = ref(null);
let username = ref(null);
let gmail= ref(null);
let job = ref(null)
let position = ref(null)
let password = ref(null)
function addUser() {
  axios.post(`http://localhost:8090/api/authentication/sign-up`, {
    name :name.value,
    username:username.value,
    password: password.value,
    gmail: gmail.value,
    job: job.value,
    position: position.value
  })
  success.value = true

   name.value = null;
   username.value = null;
   gmail.value= null;
   job.value = null
   position.value = null
   password.value = null
}
function goBack() {
  router.push({path:"/admin"})
}
</script>

<style scoped>

</style>
