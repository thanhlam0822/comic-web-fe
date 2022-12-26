<template>
  <user-header> </user-header>
  <comic-search> </comic-search>
  <user-menu> </user-menu>
  <div class="comic">
    <div class="comic-title">
      <div class="comic-name"><h2>{{comicDetail.name}}</h2></div>
      <div class="comic-date">Date published: {{comicDetail.dateTime}}</div>
    </div>
    <div class="comic-detail" >
      <div class="comic-image">
        <el-image  :src="comicDetail.imageUrl" :fit="'contain'"> </el-image>
      </div>
      <div class="comic-data">
        <div class="comic-author flex-display">
          <div class="icon">
            <el-icon><UserFilled /></el-icon>
            Author:
          </div>
          <div class="comic-text " >
             {{comicDetail.author}}
            </div>
        </div>
        <div class="comic-status flex-display">
          <div class="icon">
            <el-icon><Flag /></el-icon>
            Status:
          </div>
          <div class="comic-text">
           {{comicDetail.status}}
          </div>
        </div>
        <div class="comic-category flex-display" v-for="category in comicDetail.categories" :key="category">

          <div class="icon">
            <el-icon><Platform /></el-icon>
            Category:
          </div>
          <div class="comic-text">
            {{category.name}}
          </div>
        </div>

        <div class="comic-view flex-display">
          <div class="icon">
            <el-icon><View /></el-icon> View:
          </div>
        </div>
        <div class="comic-rate">
          <el-rate
              v-model="comicDetail.starRate"
              disabled
              size="large"
          />
        </div>
        <div class="comic-button">
          <div class="button-follow">
            <el-button type="success">Follow</el-button>
          </div>
          <div class="button-read">
            <el-button type="warning">Read first chap</el-button>
            <el-button type="warning">Read last chap</el-button>
            <el-button type="danger">Continue read</el-button>
          </div>
        </div>
      </div>


    </div>
  </div>
  <div class="comic-description ">
      <el-col :span="15">
        <div class="comic-description-text">
          <h2> <el-icon><Management /></el-icon> Description</h2>
        </div>
        <div class="comic-description-data">
          {{comicDetail.description}}
        </div>
      </el-col>
  </div>
  <div class="comic-chapter">
    <el-col :span="15">
      <div class="comic-chapter-text">
        <h2> <el-icon><List /></el-icon>Chapter list</h2>
      </div>
      <div class="comic-chapter-data">
        <el-table :data="chapterList">
          <el-table-column label="Name">
            <template #default="scope">
              <el-link @click="pushToReadPage(scope.row.id)" type="primary">{{scope.row.name}} </el-link>
            </template>
          </el-table-column>
          <el-table-column label="Date Update">
            <template #default="scope">
              <div class="grey-text">{{scope.row.timeUpdate}}</div>
            </template>
          </el-table-column>
          <el-table-column label="View">
            <template #default="scope">
              <div class="grey-text">{{scope.row.view}}</div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-col>
  </div>
  <div class="pagination">
    <el-col :span="1">
      <el-input  placeholder=""  />
    </el-col>
    <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        @current-change="handleCurrentChange"
    />
  </div>
  <router-view> </router-view>
</template>

<script lang="ts" setup>
import axios from "axios"
import {ref} from "vue"
import UserHeader from "./UserHeader.vue"
import ComicSearch from "./ComicSearch.vue"
import UserMenu from "./UserMenu.vue"
import ComicRead from "./ComicRead.vue"
import {useRoute, useRouter} from "vue-router";
let comicDetail =ref([]);
let chapterList = ref([])
let route = useRoute()
let router = useRouter()

axios.get(`http://localhost:8090/api/comic/${route.params.id}`).then(response =>{

  comicDetail.value = response.data
})
axios.get(`http://localhost:8090/api/comic/${route.params.id}/chapter`).then(response => {
  chapterList.value = response.data
})
let handleCurrentChange = (index:number) => {
  axios.get(`http://localhost:8090/api/comic/${route.params.id}/chapter?pageNumber=${index-1}`).then(response =>{
    chapterList.value = response.data
  })
}
let pushToReadPage = (id:number) => {
  router.push(`/comic-detail/chapter/${id}`)
}
</script>

<style scoped>

.comic-detail {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}
.comic-title {
  text-align: center;

}

.comic-name {
  font-size:26px;
  margin: -32px 0px;
  font-style: italic;

}
.comic-date {
  color:grey;
  font-style:italic;
}

.comic-data {
  margin-left: 30px;
}
.icon {
  font-size: 20px;
  padding-right: 5px;
}

.comic-text {
  padding-left: 50px;
  font-size: 18px;
  color:grey;
}

.flex-display {
  display: flex;
  align-items: center;
}
.button-read {
  margin-top: 10px;
}
.comic-description {
  display: flex;
  justify-content: center;

}
.comic-description-text {
  border-bottom: 4px solid;
  color: blueviolet;

}
.comic-description-data {
  margin-top: 10px;
}
.comic-chapter {
  display: flex;
  justify-content: center;
}
.comic-chapter-text {
  border-bottom: 4px solid;
  color: blueviolet;

}
.grey-text {
  color:darkgrey;
  font-style: italic;
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>