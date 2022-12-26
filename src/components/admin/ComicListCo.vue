<template>

 <div class="comic-list">
   <el-table :data="comicList" style="width: 100%">
     <el-table-column label="" >
       <template #default="scope">
         <div class="comic-image">
           <el-image style="width: 150px; height: 150px" :src=" scope.row.imageUrl" fit="contain" />
         </div>
       </template>
     </el-table-column>
     <el-table-column prop="comicId" label="ID" />
     <el-table-column prop="name" label="Name"  />
     <el-table-column prop="author" label="Author" />
     <el-table-column label="Category" >
       <template #default="scope">
         <div style="display: flex; align-items: center">

           <span v-for="category in scope.row.categories " :key="category" >{{ category.name }}</span>

         </div>
       </template>
     </el-table-column>
     <el-table-column prop="status" label="Status" />
     <el-table-column label="" >
       <template #default="scope">
         <div style="display: flex; justify-content: center">

           <el-button type="primary" @click="toEditPage(scope.row.comicId)">Edit</el-button>

           <dialog-custom @delete="deleteComic(scope.row.comicId)"></dialog-custom>
         </div>
       </template>
     </el-table-column>
   </el-table>
 </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import {ref,watch} from "vue";
import {useRouter} from "vue-router";
import DialogCustom from "@/components/admin/DialogCustom.vue"
let comicList = ref([])
let router = useRouter();
let length = ref()
axios.get("http://localhost:8090/api/comic").then(response => {
  comicList.value = response.data


})
let toEditPage = (id:number) => {
  router.push(`/edit-comic/${id}`)
}
let deleteComic = (id:number) => {
  axios.delete(`http://localhost:8090/api/comic/${id}`).then(response => {
    comicList.value = response.data
  })
}


</script>

<style scoped>
.comic-image {
  height: 200px;
}
.comic-list {
  margin-top: 10px;
}
</style>