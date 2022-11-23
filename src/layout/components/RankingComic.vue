<template>
  <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
    >
      <el-menu-item index="1">Day</el-menu-item>
      <el-menu-item index="2" >Week</el-menu-item>
      <el-menu-item index="3">Month</el-menu-item>
    </el-menu>
<!--    <div v-for="comic in comics" :key="comic">-->
<!--    </div>-->
    <el-container v-for="comic in comics" :key="comic">
      <el-aside width="200px">
        <el-image style="width: 100px; height: 110px" :src="comic.imageUrl"></el-image>
      </el-aside>
      <el-container>
        <el-header>{{comic.name}}</el-header>
        <el-main>chapter:</el-main>
      </el-container>
    </el-container>

  </template>
<script lang="ts" setup>
    import { ref } from 'vue'
    let comics = ref([])

    import axios from "axios";
    const activeIndex = ref('1')
    const handleSelect = (key: string, keyPath: string[]) => {
      if(key == '1') {

        axios.get('http://localhost:8090/api/ranking/day')
            .then((response) => {
              comics.value = response.data
            })

      }
      if(key == '2') {

        axios.get('http://localhost:8090/api/ranking/week')
            .then((response) => {
              comics.value = response.data
            })
      }
      if(key == '3') {

        axios.get('http://localhost:8090/api/ranking/month')
            .then((response) => {
              comics.value = response.data
            })
      }

    }
  </script>

<style scoped>

</style>