<template>
  <header-main >

  </header-main>
  <comic-search> </comic-search>
  <menu-main> </menu-main>
  <carousel-comic> </carousel-comic>

  <main-comic  >
    <template #ranking>
      <ranking-comic> </ranking-comic>
    </template>


  </main-comic>

  <div>

  </div>
</template>

<script lang="ts" setup>
import CarouselComic from '../components/user/ComicShouldRead.vue'
import HeaderMain from '../components/user/UserHeader.vue'
import MainComic from '../components/user/ComicList.vue'
import ComicSearch from '../components/user/ComicSearch.vue'
import MenuMain from '../components/user/UserMenu.vue'
import RankingComic from '../components/user/ComicRanking.vue'

// import { ref,defineProps} from "vue";



// let query = ref('')
// let comics = ref([])

// Comic.getAll().then((response) => {
//   comics.value = response.data
// })
//
// const handleCurrentChange = (val: number) => {
//
//   Comic.getAllPaginate(val).then((response) => {
//     comics.value = response.data
//   })
//   console.log(`current page: ${val}`)
// }
// const handleSizeChange = (val: number) => {
//   Comic.changeSize(val).then((response) => {comics.value = response.data})
// }
//
// function searchComic() {
//   Comic.searchComic(query.value)
//       .then((response) => {
//         comics.value = response.data
//       })
// }
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