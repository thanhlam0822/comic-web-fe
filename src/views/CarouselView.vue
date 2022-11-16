<template>

  <el-row justify="center">
    <el-col :span="8">
      <el-carousel :interval="3000" type="card" height="200px">
        <el-carousel-item v-for="item in items" :key="item">
          <img :src="item.imageUrl" alt="">

        </el-carousel-item>
      </el-carousel>
    </el-col>
  </el-row>

</template>

<script lang="ts" setup>
import axios from "axios";
import {reactive,ref} from "vue";

let items = reactive([])
axios.get("http://localhost:8080/api/comic").then((response) => {
  items = response.data

})



</script>
<style scoped>



</style>
