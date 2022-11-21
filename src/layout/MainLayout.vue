<template>
  <body>
  <div class="new-manga"><h2>COMIC NEWS</h2></div>
<!--        <div class="carousel-show">-->
<!--            <Carousel :autoplay="3000"  :items-to-show="3" :wrap-around="true">-->
<!--              <Slide v-for="comic in comics" :key="comic">-->
<!--                <div class="comic-description">-->
<!--                  <div  class="comic-item">-->
<!--                    <el-image style="width: 200px; height: 252px" :src="comic.imageUrl"  />-->
<!--                  </div>-->
<!--                  <div  class="comic-detail">-->
<!--                    <div class="category-name"> <div v-for="category in comic.categories" :key="category"> | {{category.name}} </div></div>-->
<!--                    <div class="comic-name"> {{comic.name}}</div>-->
<!--                    <div><el-rate disabled v-model="comic.starRate" size="large" /> </div>-->
<!--                    <div class="author-name">{{comic.author}}</div>-->
<!--                    <a href="" class="button-read-more">Read-more  ></a>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </Slide>-->
<!--              <template #addons>-->
<!--                <Navigation />-->
<!--              </template>-->
<!--            </Carousel>-->
<!--        </div>-->
  <div>
    <div  v-for="comic in comics" :key="comic">
      <div class="comic-description">
        <div  class="comic-item">
          <el-image style="width: 200px; height: 252px" :src="comic.imageUrl"  />
        </div>
        <div  class="comic-detail">
          <div class="category-name"> <div v-for="category in comic.categories" :key="category"> | {{category.name}} </div></div>
          <div class="comic-name"> {{comic.name}}</div>
          <div><el-rate disabled v-model="comic.starRate" size="large" /> </div>
          <div class="author-name">{{comic.author}}</div>
          <a href="" class="button-read-more">Read-more  ></a>
        </div>
      </div>

    </div>
    <div>
      <el-pagination
          v-model:current-page="currentPage"
          background layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :total="1000" />
    </div>

  </div>
  </body>
</template>
<script lang="ts" setup>
import axios from "axios";
import {reactive, ref} from "vue";
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
const currentPage = ref(1)
let comics = ref([])
axios.get("http://localhost:8090/api/comic")
    .then((response) => {
      comics.value = response.data
    })
const handleCurrentChange = (val: number) => {
  axios.get(`http://localhost:8090/api/comic?pageNumber=${val-1}`)
      .then((response) => {
        comics.value = response.data
      })
  console.log(`current page: ${val}`)
}

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

  justify-content: space-evenly;
  background-color: #FFFFFF;
  width: 300px;
  height: 252px;
  text-align: left;
  margin-left: 30px;

}
.category-name {
  display: flex;
  font-size: 14px;
  color: grey;

}
a.button-read-more {
  text-decoration: none;
  color:deeppink;
}
a.button-read-more:hover {
  font-size: 20px;
}
.author-name {
  font-size: 14px;
  color: #808080;
}
</style>