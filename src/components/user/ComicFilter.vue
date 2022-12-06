<template>
  <header-main> </header-main>
  <comic-search> </comic-search>
  <menu-main> </menu-main>
  <br>
  <el-row class="row-bg" justify="center">
    <el-col :span="6"><div class="grid-content"/>
      <el-input
          v-model="query"

          size="large"
          placeholder="Filter Comic"
          @keyup.enter="filterComic"
      />
    </el-col>

  </el-row>

  <body>
  <el-container>
    <el-main >
      <div class="filter-comics">
        <div v-for="comic in comics"  :key="comic">

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

  </el-container>

  </body>
  <div class="pagination">


    <input  v-model="filterPageConfig.pageSize" placeholder="Number of comics"  >

    <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        @current-change="handleCurrentChange"

    />
  </div>

</template>

<script lang="ts" setup>
import {reactive, ref,watch} from "vue";
import {useRoute, useRouter} from 'vue-router'
import Comic from "@/api/Comic.js";
import HeaderMain from './UserHeader.vue'
import MenuMain from './UserMenu.vue'
import ComicSearch from "@/components/user/ComicSearch.vue";
const router = useRouter();
const route = useRoute();
const keyword = route.query.keyword
let comics = ref([])
const query = ref('')

function addData(response) {
  comics.value = response.data
}
Comic.filterComic(keyword,query.value).then(addData)


let filterPageConfig=reactive({
  pageNumber: 0 ,
  pageSize:10
})


const handleCurrentChange = (val: number) => {
  filterPageConfig.pageNumber = val-1


}
function filterComic() {
  Comic.filterComic(route.query.keyword,query.value).then(addData)
  query.value = '';
}

watch(filterPageConfig,() => {
 Comic.filterComic(route.query.keyword,query.value,filterPageConfig.pageNumber,filterPageConfig.pageSize).then(addData)
})
watch(
    () => route.query.keyword,
    (oldV,newV  ) => {
      console.log(newV,oldV)

      Comic.filterComic(oldV,query.value,filterPageConfig.pageNumber,filterPageConfig.pageSize).then(addData)
    },
    {

      immediate:true
    }
);















</script>

<style scoped>
.search-bar {
  display: flex;
  justify-content: center;
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

.filter-comics {
  display: flex;

  flex-wrap: wrap;
  align-items: center;
}
.pagination {
  display: flex;
  justify-content: center;
}



</style>