<template>
  <body>
  <div class="carousel-show">
    <Carousel  :items-to-show="2" :wrap-around="true">
      <Slide v-for="slide in 10" :key="slide">
        <div class="comic-description">
          <div class="comic-item">
            <el-image style="width: 200px; height: 252px" src="https://st.ntcdntempv3.com/data/comics/72/tu-luc-bat-dau-lien-vo-dich.jpg" :fit="fit" />
          </div>
          <div class="comic-detail">
            <div>Anime/Manga</div>
            <div>Naruto</div>
            <div>Star</div>
            <div>Author </div>
            <div>Read-more</div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
  </body>

</template>
<script setup>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
</script>
<style scoped>
body {

}
</style>