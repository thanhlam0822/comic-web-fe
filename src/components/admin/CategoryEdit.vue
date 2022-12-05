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
    <el-form-item >
      <el-button @click.prevent="editUser" type="primary " plain>Edit</el-button>
      <el-button @click="goBack" type="primary " plain>Go back</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import {useRoute, useRouter} from 'vue-router'
import {ref, watch} from 'vue'
import axios from "axios";
const route = useRoute()
const router = useRouter()
const id = route.params.id
const labelPosition = ref('right')
let success = ref(false)
let name = ref(null);
function editUser() {
  axios.put(`http://localhost:8090/api/category/${id}`, {
    name :name.value,

  })
  success.value = true
}
function goBack() {
  router.push({path:"/admin/dashboard/category-list"})
}

</script>

<style scoped>

</style>