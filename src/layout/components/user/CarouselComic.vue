<template>
  <body>
  <div class="popular-manga"><h2>POPULAR MANGA OF ALL TIME</h2></div>
  <div class="comic-should-read">
    <Carousel :wrap-around="true">
      <Slide v-for="slide in comicsShouldRead" :key="slide">
        <div class="carousel__item">
          <el-image style="width:1024px;height: 500px" :src="slide" :fit="'contain'"/>
        </div>
      </Slide>
      <template #addons>
        <Navigation/>

      </template>
    </Carousel>

  </div>

  </body>


</template>

<script lang="ts" setup>

import {Carousel, Navigation, Slide} from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'


let comicsShouldRead = [
  'https://f8-zpcloud.zdn.vn/3708219501215563035/12a56695b0d7698930c6.jpg',
  'https://f7-zpcloud.zdn.vn/6963972692246792437/4d98ff452609ff57a618.jpg',
  'https://f8-zpcloud.zdn.vn/6812872653267419000/762d3384e3c83a9663d9.jpg'
]

</script>
<style scoped>

.popular-manga {
  margin-left: 45px;
}

</style>