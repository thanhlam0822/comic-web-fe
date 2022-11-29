<template>

  <input  v-model="query">
  <body>
  <el-container>
    <el-main >

      <div class="new-comics">

        <div v-for="comic in comics"  :key="comic">

              <div v-for="category in comic.categories" :key="category">
                <div v-if=" !query ||comic.author === query  ">
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

          </div>
        </div>

    </el-main>

  </el-container>

  </body>

</template>

<script lang="ts" setup>
import {ref,computed} from "vue";
import {useRoute, useRouter} from 'vue-router'
import Comic from "@/api/Comic.js";
const router = useRouter();
const route = useRoute();
const name = route.query.name;
let comics = ref([])
const query = ref('')

Comic.searchComic(name).then((response) => {
  comics.value = response.data
})








</script>

<style scoped>

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

  flex-direction: column ;
  align-items: center;
}


.search-bar {
  display: flex;
  justify-content: center;
  background-color: white;
}

</style>