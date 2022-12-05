<template>
  <div class="category-list">

    <div class="category-title">
      <el-row justify="space-around" class="column">
        <el-col :span="6">
          <div class="grid-content "/>
          STT
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


    <el-row justify="space-around" class="row " v-for="(category,index) in categories" :key="category">
      <el-col :span="6">
        <div class="grid-content "/>
        <div class="id">
          {{ index +1 }}
          {{category.categoryId}}
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
        <el-button type="danger" @click="centerDialogVisible = true">Delete</el-button>
        <div class="alert">
          <el-dialog v-model="centerDialogVisible" title="Warning" width="30%" center>
          <span>
            Do you want to delete this category ?
          </span>
            <template #footer>
            <span class="dialog-footer">
              <el-button @click="centerDialogVisible = false">Cancel</el-button>
              <el-button type="primary" @click="deleteCategory(category.categoryId)">
                Confirm
              </el-button>
            </span>
            </template>
          </el-dialog>
        </div>
      </el-col>
    </el-row>
  </div>


</template>

<script lang="ts" setup>
import axios from "axios";
import {ref,watch} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()
const centerDialogVisible = ref(false)
let categories = ref([])
let listLength = ref(0)
axios.get("http://localhost:8090/api/category/list").then((response) => {
  categories.value = response.data


})

function deleteCategory(id) {
  axios.delete(`http://localhost:8090/api/category/${id}`)

  centerDialogVisible.value = false

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