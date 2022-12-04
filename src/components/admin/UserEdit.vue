<template>
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
      @keyup.enter.prevent="editUser"
  >

      <el-form-item label="ID">
        <el-input v-model="id" disabled />
      </el-form-item>
      <el-form-item label="Name">
        <el-input v-model="name" />
      </el-form-item>
      <el-form-item label="User Name">
        <el-input v-model="username" />
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
      <el-button @click.prevent="editUser" type="primary " plain>Edit</el-button>
      <el-button @click="goBack" type="primary " plain>Go back</el-button>

    </el-form-item>

  </el-form>




</template>

<script lang="ts" setup>
import {useRoute, useRouter} from 'vue-router'
import { reactive, ref } from 'vue'
import axios from "axios";
const route = useRoute()
const router = useRouter()
const id = route.params.id
const labelPosition = ref('right')
let user = ref(null)
let success = ref(false)
// let formEdit = reactive({
//   name: '',
//   username: '',
//   gmail: '',
//   job: '',
//   position:''
// })
let name = ref(null);
let username = ref(null);
let gmail= ref(null);
let job = ref(null)
let position = ref(null)
axios.get(`http://localhost:8090/api/user/${id}`).then((response) => {
  user.value = response.data


})
function editUser() {
  axios.put(`http://localhost:8090/api/user/edit/${id}`, {
      name :name.value,
      username:username.value,
      gmail: gmail.value,
      job: job.value,
      position: position.value
  })
  success.value = true
}
function goBack() {
  router.push({path:"/admin"})
}
</script>

<style scoped>

</style>