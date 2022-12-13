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

    <el-form-item>
      <el-dropdown>
        <span class="el-dropdown-link">
          Category List
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <div v-for="item in categoryList" :key="item">
              <el-dropdown-item @click="pushToArray(item.categoryId)"> {{item.categoryName}}</el-dropdown-item>
            </div>

          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-form-item>
    <el-form-item>
      <div v-for="id in idList" :key="id"> {{id}}</div>
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
let idList = ref([''])
let categoryName = ref([''])
let categoryList = ref([])
axios.get("http://localhost:8090/api/category/list").then(response => categoryList.value = response.data)
function addComic(id) {
  axios.post(`http://localhost:8090/api/comic/` + idList.value , {
    name :name.value,


  })
  success.value = true

  name.value = null;

}
function pushToArray(item) {
  idList.value.push(item)

}
function goBack() {
  router.push({path:"/admin"})
}
</script>

<style scoped>

</style>