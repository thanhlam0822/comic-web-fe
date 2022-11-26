<template>
  <el-select  v-model="value"  placeholder="Select" size="large">
    <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        @click="change(item.value)"
    />
  </el-select>


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
import Comic from '@/api/Comic.js';
const value = ref('day')
const comics = ref([])
Comic.rankComic(value.value).then((response) => {
  comics.value = response.data })
function change(query) {
  value.value = query
  Comic.rankComic(value.value).then((response) => {
    comics.value = response.data
  })
}
const options = [
  {
    value: 'day',
    label: 'Day',
  },
  {
    value: 'week',
    label: 'Week',
  },
  {
    value: 'month',
    label: 'Month',
  },

]
</script>

<style scoped>

</style>