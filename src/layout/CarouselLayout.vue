<template>
  <body>
  <div class="popular-manga"><h2>POPULAR MANGA OF ALL TIME</h2></div>
  <div class="comic-should-read">

    <el-container>
      <el-col :span="24">
        <el-carousel :interval="4000" type="card" :autoplay="true">
          <el-carousel-item v-for="item in comicsShouldRead" :key="item">
            <el-image style="width: 320px; height: 350px" :src="item" :fit="contain"/>
            <div>Chu Thanh Lam</div>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-container>
  </div>
  </body>


</template>

<script lang="ts" setup>
import axios from "axios";
import {reactive, ref} from "vue";
import {Carousel, Navigation, Slide} from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import {defineComponent} from 'vue'

let comicsShouldRead = [
  'https://i.pinimg.com/564x/87/96/76/879676dd5a0d801bc3bb5cf126d955c6.jpg',
  'https://i.pinimg.com/564x/c1/48/53/c148539679e32de0e43b065226f82137.jpg',
  'https://i.pinimg.com/564x/1d/43/03/1d4303f7cbbbaa3ae8171199afe0c0a9.jpg'
]
let items = ref([])

axios.get("http://localhost:8080/api/comic")
    .then((response) => {
      items.value = response.data

    })

</script>
<style scoped>

.comic-should-read {
  margin: 30px 450px;
}

.popular-manga {
  margin-left: 45px;

}
</style>


