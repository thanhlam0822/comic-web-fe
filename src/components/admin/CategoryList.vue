<template>
  <div class="category-list">

    <div class="category-title">
      <el-row justify="space-around" class="column">
        <el-col :span="6">
          <div class="grid-content "/>
          ID
        </el-col>
        <el-col :span="5">
          <div class="grid-content "/>
          Name
        </el-col>
        <el-col :span="3">
          <div class="grid-content "/>
        </el-col>
      </el-row>
    </div>


    <el-row justify="space-around" class="row " v-for="category in categories" :key="category">
      <el-col :span="6">
        <div class="grid-content "/>
        <div class="id">
          {{ category.categoryId }}

        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content "/>
        <div class="name">
          <div>{{ category.categoryName }}</div>

        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content "/>
        <el-button type="primary" @click="pushToEdit(category.categoryId)">Edit</el-button>
        <dialog-custom
                       @delete="deleteCategory(category.categoryId)">

        </dialog-custom>

      </el-col>


    </el-row>
  </div>


</template>

<script lang="ts" setup>
import axios from "axios";
import {ref} from "vue";
import {useRouter} from "vue-router";
import DialogCustom from '@/components/admin/DialogCustom.vue'



const router = useRouter()


let categories = ref([])

axios.get("http://localhost:8090/api/category/list").then((response) => {
  categories.value = response.data


})

function deleteCategory(id: number) {

  axios.delete(`http://localhost:8090/api/category/${id}`).then((response) => {
    categories.value = response.data
  })

}

function pushToEdit(id) {
  router.push({path: `/edit-category/${id}`})
}
</script>

<style scoped>
.category-list {
  border: 1px solid darkgrey;
  border-radius: 10px;
  margin-top: 50px;
}

.category-title {


  border: 1px solid darkgrey;
  border-radius: 10px;
  background-color: #CBD5E0;
  height: 40px;
  line-height: 40px;
}

.row {
  border: 1px solid darkgrey;
  border-radius: 10px;
  background-color: white;
  height: 60px;
  line-height: 60px
}
</style>