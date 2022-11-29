<template>
  <div class="search-bar">
    <div class="search-menu">

      <el-input
          v-model="query"
          class="w-50 m-2"
          size="large"
          placeholder="Please Input"
          @keyup.enter="searchComic"

      />
    </div>
  </div>
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


      <input  v-model="pageConfig.pageSize" placeholder="Number of comics"  >

    <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        @current-change="handleCurrentChange"

    />
  </div>

</template>
<script lang="ts" setup>
import { ref,reactive,watch,} from "vue";
import Comic from "@/api/Comic.js";

let pageConfig=reactive({
  pageNumber: 0 ,
  pageSize:8
})
let comics = ref([])
let query = ref('')

function addData(response) {
  comics.value = response.data
}

    Comic.getAll().then(addData)


const handleCurrentChange = (val: number) => {
  pageConfig.pageNumber = val-1
}

watch(pageConfig,() => {

      Comic.changePageAndSize(pageConfig.pageNumber,pageConfig.pageSize)
          .then(addData);
})
function searchComic() {
  Comic.searchComic(query.value)
      .then(addData)

}

</script>
<style>
.new-manga {
  margin-left: 45px;
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
.search-bar {
  display: flex;
  justify-content: center;
  background-color: white;
}
.search-menu {
  width: 500px;
}
</style>