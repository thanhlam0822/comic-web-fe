<template>
  <h1>ADD CATEGORY FORM</h1>
  <el-row justify="center" v-if="success">
    <el-col :span="5" >
      <el-alert title="Add success" type="success" effect="dark" show-icon />
    </el-col>
  </el-row>
  <br>
  <el-form
      :label-position="labelPosition"
      label-width="100px"
      style="max-width: 460px"
      @keyup.enter.prevent="addCategory"
  >
    <el-form-item label="Name">
      <el-input v-model="name" />
    </el-form-item>


    <el-form-item >
      <el-button @click.prevent="addCategory" type="primary " plain>Add Category</el-button>
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

function addCategory() {
  axios.post(`http://localhost:8090/api/category`, {
    name :name.value,

  })
  success.value = true

  name.value = null;

}
function goBack() {
  router.push({path:"/admin"})
}
</script>

<style scoped>

</style>