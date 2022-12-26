  <template>

    <div class="hide-div">{{comic}}}</div>
  <el-row justify="center" v-if="success">
  <el-col :span="5" >
    <el-alert title="Update success" type="success" effect="dark" show-icon />
  </el-col>
  </el-row>
  <br>
  <el-form
      :label-position="labelPosition"
      label-width="100px"
      style="max-width: 460px"
      @keyup.enter.prevent=""
  >
  <el-form-item label="Name">
    <el-input v-model="comic.name" />
  </el-form-item>
  <el-form-item label="Author">
    <el-input v-model="comic.author" />
  </el-form-item>
  <el-form-item label="Description">
    <el-input type="textarea" autosize v-model="comic.description"  />
  </el-form-item>
  <el-form-item label="Status">
    <el-input v-model="comic.status"  />
  </el-form-item>
    <el-form-item label="ImgLink">
    <el-input v-model="comic.imageUrl" />
  </el-form-item>

  <el-form-item >
    <el-button @click.prevent="editComic" type="primary " plain>Edit Comic</el-button>
    <el-button @click="goBack" type="primary " plain>Go back</el-button>

  </el-form-item>

  </el-form>
  </template>

  <script lang="ts" setup>
import axios from "axios"
import {ref} from 'vue'
import {useRoute,useRouter} from "vue-router";
let comic = ref();
let route = useRoute();
let router = useRouter();
let success = ref(false)
let id = route.params.id;
axios.get(`http://localhost:8090/api/comic/${id}`).then(response => {
  comic.value = response.data
})
let editComic = () => {
  axios.put(`http://localhost:8090/api/comic/${id}`,{
    name: comic.value.name,
    author: comic.value.author,
    description : comic.value.description,
    status : comic.value.status,
    imageUrl : comic.value.imageUrl
  })
  success.value = true
}
let goBack = () => {
  router.push("/admin/dashboard/comic-list")
}
  </script>

  <style scoped>
.hide-div {
  display: none;
}
  </style>