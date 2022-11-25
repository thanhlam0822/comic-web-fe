<template>

  <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="formEdit"
      style="max-width: 460px"
      @keyup.enter.prevent="editUser"
  >
    <el-form-item label="ID">
      <el-input v-model="id" disabled />
    </el-form-item>
    <el-form-item label="Name">
      <el-input v-model="formEdit.name" />
    </el-form-item>
    <el-form-item label="User Name">
      <el-input v-model="formEdit.username" />
    </el-form-item>
    <el-form-item label="Gmail">
      <el-input v-model="formEdit.gmail"  />
    </el-form-item>
    <el-form-item label="Job">
      <el-input v-model="formEdit.job" />
    </el-form-item>
    <el-form-item label="Position">
      <el-input v-model="formEdit.position" />
    </el-form-item>
    <el-form-item >
      <el-button @click.prevent="editUser" type="primary " plain>Edit</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { reactive, ref } from 'vue'
import axios from "axios";
const route = useRoute()
const id = route.params.id
const labelPosition = ref('right')
const formEdit = reactive({
  name: '',
  username: '',
  gmail: '',
  job: '',
  position:''
})
function editUser() {
  axios.patch(`http://localhost:8090/api/user/edit/${id}`, {
      name : formEdit.name,
      username:formEdit.username,
      gmail: formEdit.gmail,
      job: formEdit.job,
      position: formEdit.position
  })
}
</script>

<style scoped>

</style>