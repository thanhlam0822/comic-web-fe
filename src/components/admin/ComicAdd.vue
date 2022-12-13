<template>
<h1>Add Comic Form </h1>
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
      @keyup.enter.prevent="addComic"
  >
    <el-form-item label="Name">
      <el-input v-model="name" />
    </el-form-item>
    <el-form-item label="Author">
      <el-input v-model="author" />
    </el-form-item>
    <el-form-item label="Description">
      <el-input v-model="description"  />
    </el-form-item>
    <el-form-item label="Status">
      <el-input v-model="status"  />
    </el-form-item>
    <el-form-item label="ImgLink">
      <el-input v-model="imgLink" />
    </el-form-item>

    <el-form-item >
      <el-button @click.prevent="addComic" type="primary " plain>Add User</el-button>
      <el-button @click="goBack" type="primary " plain>Go back</el-button>

    </el-form-item>

  </el-form>
</template>

<script lang="ts" setup>
import {useRouter} from 'vue-router'
import {  ref } from 'vue'
import axios from "axios";
const labelPosition = ref('right')
const router = useRouter()
let success = ref(false)
let name = ref(null);
let author = ref(null);
let description = ref(null);
let imgLink = ref(null)
let status = ref(null)

function addComic() {
  axios.post(`http://localhost:8090/api/comic`, {
    name :name.value,
    author:author.value,
    description: description.value,
    imageUrl: imgLink.value,
    status: status.value,

  })
  success.value = true

  name.value = null;
  author.value = null;
  description.value= null;
  imgLink.value = null
  imgLink.value = null
  status.value = null
}
function goBack() {
  router.push({path:"/admin"})
}
</script>

<style scoped>

</style>