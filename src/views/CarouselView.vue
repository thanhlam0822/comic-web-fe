<template>

<!--      <el-carousel :interval="3000" type="card" height="200px">-->
<!--        <el-carousel-item v-for="item in items" :key="item">-->
<!--          <img :src="item.imageUrl" alt="">-->
<!--        </el-carousel-item>-->
<!--      </el-carousel>-->

    <div class="carousel-show">
      <Carousel  :wrapAround="true" :itemsToShow="6"  :autoplay="3000" >
        <Slide v-for="item in items" :key="item">
          <div class="carousel__item"><img class="img-carousel" :src="item.imageUrl" alt=""></div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>




</template>

<script lang="ts" setup>
import axios from "axios";
import {reactive,ref} from "vue";
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { defineComponent } from 'vue'
let items = ref([])

axios.get("http://localhost:8080/api/comic")
    .then((response) => {
  items.value = response.data

})
console.log(items)
</script>
<style scoped>
.img-carousel {
  height: 230px;
  width: 168px;
}
.carousel-show {
  margin: 10px 200px;
}

</style>


