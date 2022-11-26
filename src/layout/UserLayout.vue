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
    <template #ranking>
      <ranking-comic> </ranking-comic>
    </template>
    <el-pagination
        :page-sizes="[5,8,10,12,14,15]"
        background
        layout="sizes,prev, pager, next"
        :total="1000"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"/>

  </main-comic>

  <div>

  </div>
</template>

<script lang="ts" setup>
import CarouselComic from '../components/user/CarouselComic.vue'
import HeaderMain from '../components/user/HeaderMain.vue'
import MainComic from '../components/user/MainComic.vue'
import SearchItem from '../components/user/SearchComic.vue'
import MenuMain from '../components/user/MenuMain.vue'
import RankingComic from '../components/user/RankingComic.vue'
import { Search } from '@element-plus/icons-vue'
import {reactive, ref} from "vue";
import axios from "axios";
import Comic from '../api/Comic.js';
let input1 = ref('')
let comics = ref([])

Comic.getAll().then((response) => {
  comics.value = response.data
})

const handleCurrentChange = (val: number) => {

  Comic.getAllPaginate(val).then((response) => {
    comics.value = response.data
  })
  console.log(`current page: ${val}`)
}
const handleSizeChange = (val: number) => {
  Comic.changeSize(val).then((response) => {comics.value = response.data})

}

function searchComic() {
  Comic.searchComic(input1.value)
      .then((response) => {
        comics.value = response.data
      })
}
// function darkMode() {
//   let htmlDarkMode = document.querySelector("html") as HTMLHtmlElement
//
//   if (htmlDarkMode.style.background === '#FCFBFF') {
//     htmlDarkMode.style.background = '#333'
//   } else {
//     htmlDarkMode.style.background = '#FCFBFF'
//   }
// }

</script>

<style scoped>

</style>