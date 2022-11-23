<template>
  <header-main @search-comic="searchComic" @turn-dark="darkMode()">

  </header-main>
  <search-item>
    <el-input
        v-model="input1"
        class="w-50 m-2"
        size="large"
        placeholder="Please Input"
        @keyup.enter="searchComic"
        :suffix-icon="Search"
    />
  </search-item>
  <menu-main> </menu-main>
  <carousel-comic> </carousel-comic>

  <main-comic  :comics="comics">
    <el-pagination
        background layout="prev, pager, next"
        :total="90"

        @current-change="handleCurrentChange"/>
  </main-comic>
</template>

<script lang="ts" setup>
import CarouselComic from './components/CarouselComic.vue'
import HeaderMain from './components/HeaderMain.vue'
import MainComic from './components/MainComic.vue'
import SearchItem from './components/SearchComic.vue'
import MenuMain from './components/MenuMain.vue'
import { Search } from '@element-plus/icons-vue'

import {ref} from "vue";
import axios from "axios";
let input1 = ref('')
let comics = ref([])
axios.get("http://localhost:8090/api/comic")
    .then((response) => {
      comics.value = response.data
    })
const handleCurrentChange = (val: number) => {
  axios.get(`http://localhost:8090/api/comic?pageNumber=${val - 1}`)
      .then((response) => {
        comics.value = response.data
      })
  console.log(`current page: ${val}`)
}
function searchComic() {
  axios.get(`http://localhost:8090/api/search?name=${input1.value}`)
      .then((respone) => {
        comics.value = respone.data
      })
}
function darkMode() {
  let htmlDarkMode = document.querySelector("html") as HTMLHtmlElement

  if (htmlDarkMode.style.background === '#FCFBFF') {
    htmlDarkMode.style.background = '#333'
  } else {
    htmlDarkMode.style.background = '#FCFBFF'
  }
}

</script>

<style scoped>

</style>