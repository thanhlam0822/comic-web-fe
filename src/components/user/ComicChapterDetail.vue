<template>
  <user-header> </user-header>
  <comic-search> </comic-search>
  <user-menu> </user-menu>
  <div class="chapter-info-center">
    <el-col :span="15"  >
      <div class="chapter-info">
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item :to="{ path: '/' }">Home Page</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: `/comic-detail/${chapterDetail.comic.id}`}" >
            {{chapterDetail.comic.name}}
          </el-breadcrumb-item>
          <el-breadcrumb-item>Chapter {{route.params.chapterId}}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="comic-name">
          <h1><a class="link-comic" :href="`/comic-detail/${chapterDetail.comic.id}`">
            {{chapterDetail.comic.name}}</a> - {{chapterDetail.name}}
          </h1>
          <p class="chapter-date">[Update time: {{chapterDetail.timeUpdate}}]</p>
        </div>


        <div class="change-language-button">
          <div>
            <div class="italic-text">You can choose language to read comic</div>
          </div>
          <div>
            <el-button @click="changeLanguage(chapterDetail.link)" type="success">Vietnamese</el-button>
            <el-button @click="changeLanguage(chapterDetail.linkEng)" type="primary">English</el-button>
            <el-button @click="changeLanguage(chapterDetail.linkRussia)" type="danger">Russia</el-button>
          </div>
          <div class="error-alert">
<!--            <el-button @click="addAlert(currentUser.id,chapterDetail.id)" type="warning"><div class="alert-icon"><el-icon><WarnTriangleFilled /></el-icon></div>  Error Alert</el-button>-->
            <add-alert> </add-alert>
          </div>
          <el-affix :offset="-30">
            <div class="chapter-list">
              <el-select v-model="value" filterable placeholder="Select" size="large">
                <el-option
                    v-for="chapter in chapterList"
                    :key="chapter.name"
                    :label="chapter.name"
                    :value="chapter.name"
                    @click="toChapter(chapter.id)"

                />
              </el-select>

            </div>
          </el-affix>
        </div>
      </div>
    </el-col>

  </div>
  <div :style="{backgroundColor:isDark}"  class="chapter-images">

<!--    <div   class="turn-dark">-->
<!--&lt;!&ndash;      <el-button type="warning" @click="changeColor">Change color</el-button>&ndash;&gt;-->
<!--    </div>-->


      <el-col class="chapter-image" :span="10">
        <el-image style="height: 100%"  :src="link"></el-image>
      </el-col>
    </div>


</template>

<script lang="ts" setup>
import UserHeader from "./UserHeader.vue"
import ComicSearch from "./ComicSearch.vue"
import UserMenu from "./UserMenu.vue"
import {useStore} from "vuex";
import {useRoute,useRouter} from "vue-router";
import {computed, ref,watch} from "vue"
import { ArrowRight } from '@element-plus/icons-vue'
import axios from "axios"
import authHeader from "@/services/auth-header.js";
import AddAlert from "./AddAlert.vue"
let route = useRoute()
let router = useRouter()
let isDark = ref('#333333')
let link = ref()
let value = ref('')
let chapterList = ref([{
  id: null,name:null
}])
let chapterDetail = ref(
  {
    id:null, name:null,link:null,linkEng:null,linkRussia:null,timeUpdate:null,view:null,comic:{
      id:null,
      name: null
    }
  }
)

let changeColor = () => {
  if(isDark.value == '#333333') {
      isDark.value = '#FCFBFF'
  }
  else if(isDark.value == '#FCFBFF') {
    isDark.value = '#333333'
  }
}
let changeLanguage = (language:string) => {
  link.value = language
}
let toChapter = (chapterId:any) => {
 router.push(`/comic-detail/chapter/${chapterId}`)
}
axios.get(`http://localhost:8090/api/chapter/${route.params.chapterId}`).then(response => {
  chapterDetail.value = response.data

    axios.get(`http://localhost:8090/api/comic/${chapterDetail.value.comic.id}/chapter`).then(response => {
      chapterList.value = response.data

  })
})
watch(
    () => route.params.chapterId,
    () => {
      axios.get(`http://localhost:8090/api/chapter/${route.params.chapterId}`).then(response => {
        chapterDetail.value = response.data
        link.value = chapterDetail.value.link
      })
    },
    {deep:true,immediate:true}
)


</script>

<style scoped>
.chapter-images {
  display: flex;
  justify-content: center;
}
.chapter-image {
  margin-top: 50px;
  display: flex;
  justify-content: center;

}

.chapter-info {
  background-color: white;
  margin-top: 20px;


}
.chapter-info-center {
  display: flex;
  justify-content: center;
  background-color: #333333;


}
.link-comic {
  text-decoration: none;
  color: blue;
}
.link-comic:hover {
  text-decoration:underline;
  color: purple;
}
.comic-name {
  display: flex;
  align-items: center;
  margin-left: 10px;
}
.chapter-date {
  margin-left: 10px;
  font-style: italic;
  color: grey;
}
.change-language-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f6f7f8;
  align-items: center;
  padding-bottom: 10px;
}
.italic-text {
  color: grey;
  font-style: italic;
  padding-bottom: 10px;
}
.el-breadcrumb {
  margin-left: 10px;
  padding-top: 10px;
}
.error-alert {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.alert-icon {
  font-size: 16px;
  margin-right: 10px;
}
.chapter-list {
  margin-top: 30px;

}
</style>