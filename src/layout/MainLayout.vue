<template>
  <body>
  <div class="new-manga"><h2>COMIC NEWS</h2></div>
        <div class="carousel-show">
            <Carousel  :items-to-show="3" :wrap-around="true">
              <Slide v-for="item in items" :key="item">

                <div class="comic-description">

                  <div class="comic-item">
                    <el-image style="width: 200px; height: 252px" :src="item.name" :fit="contain" />
                  </div>
                  <div class="comic-detail">
                    <div>{{item.author}}</div>
                    <div v-for="name in item.categories" :key="name">{{ name.name }}</div>
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
import axios from "axios";
import {reactive, ref} from "vue";
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
let items = ref([])
axios.get("http://localhost:8090/api/category/1/comic")
    .then((response) => {
      items.value = response.data

    })
console.log(items)
</script>
<style>
.new-manga {
  margin-left: 45px;
}
.carousel-show {
  margin: 0px 50px;
}
.comic-description {
  display: flex;
  margin: 30px 30px;
}
.comic-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #FFFFFF;
  width: 300px;
  height: 252px;

}


</style>