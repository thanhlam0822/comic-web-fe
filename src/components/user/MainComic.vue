<template>
  <body>
  <el-container>
    <el-main >
      <div class="new-manga"><h2>COMIC NEWS</h2></div>
      <div class="new-comics">
        <div v-for="comic in comics" :key="comic">
          <div class="comic-description">
            <div class="comic-item">
              <el-image style="width: 200px; height: 252px" :src="comic.imageUrl"/>
            </div>
            <div class="comic-detail">
              <div class="category-name">
                <div v-for="category in comic.categories" :key="category"> | {{ category.name }}</div>
              </div>
              <div class="comic-name"> {{ comic.name }}</div>
              <div>
                <el-rate disabled v-model="comic.starRate" size="large"/>
              </div>
              <div class="author-name">{{ comic.author }}</div>
              <a href="" class="button-read-more">Read-more ></a>
            </div>
          </div>
        </div>
      </div>
    </el-main>
    <div class="ranking">
      <el-aside width="350px" >
        <h2>Ranking</h2>
        <div class="chart">
          <slot name="ranking"> </slot>
        </div>
      </el-aside>
    </div>
  </el-container>

  </body>
  <div class="pagination">
     <slot/>
  </div>
</template>
<script lang="ts" setup>
import {defineProps} from "vue";
import 'vue3-carousel/dist/carousel.css'
defineProps(['comics'])


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
  margin-left: 8px;

}

.category-name {
  display: flex;
  font-size: 14px;
  color: grey;

}

a.button-read-more {
  text-decoration: none;
  color: deeppink;
}

a.button-read-more:hover {
  font-size: 20px;
}

.author-name {
  font-size: 14px;
  color: #808080;
}

.new-comics {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

}

.pagination {
  display: flex;
  justify-content: center;
}
.ranking {
  margin-right: 100px;
}
.chart {
  margin-top: 40px;
}
</style>