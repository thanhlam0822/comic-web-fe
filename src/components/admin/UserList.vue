<template>
  <div class="user-list">

    <el-row  justify="space-around" class="column">
      <el-col :span="6"><div class="grid-content " />Name</el-col>
      <el-col :span="4"><div class="grid-content " />User Detail</el-col>
      <el-col :span="4"><div class="grid-content " />Status</el-col>
      <el-col :span="4"><div class="grid-content " />Role</el-col>
      <el-col :span="4"><div class="grid-content " /></el-col>
    </el-row>


    <el-row  justify="space-around" class="row" v-for="user in userList" :key="user" >
      <el-col :span="6"><div class="grid-content " />
        <div class="name">
          <div class="user-data">
            <el-row >
              <el-col >
                <div >
                  <div>
                    <el-avatar :size="50" :src="imgUrl" />
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="user-info">
            <div>{{user.name}}</div>
            <div>{{user.gmail}} </div>
          </div>
        </div>
      </el-col>
      <el-col :span="4"><div class="grid-content " />
        <div class="user-detail">
          <div>{{user.job}}</div>
          <div>{{user.position}}</div>
        </div>
      </el-col>
      <el-col :span="4"><div class="grid-content " />
        <div class="user-status">
          <div v-if="user.status == 'ACTIVE'">
            <el-button type="success" >Active</el-button>
          </div>
          <div v-else>
            <el-button type="danger" >Deleted</el-button>
          </div>
        </div>
      </el-col>
      <el-col :span="4"><div class="grid-content " /><div class="user-role">{{user.role}}</div></el-col>
      <el-col :span="4"><div class="grid-content " />
        <div class="user-active">
          <!--          <router-link :to="'edit-user/' + user.id"> <el-button type="primary">Edit</el-button> </router-link>-->
          <el-button type="primary" @click="pushToEdit(user.id)">Edit</el-button>

<!--          <el-button @click="deleteUser(user.id)" type="danger">Delete</el-button>-->
          <dialog-custom :lists="userList"
                         @delete="deleteUser(user.id)">

          </dialog-custom>
        </div>
      </el-col>

    </el-row>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import axios from "axios";
import {useRouter} from "vue-router";
import DialogCustom from '@/components/admin/DialogCustom.vue'
import authHeader from '@/services/auth-header.js';
const router = useRouter()
const imgUrl = 'https://f5-zpcloud.zdn.vn/7702170006391086294/594ab303a5697c372578.jpg'

const userList = ref([])
axios.get("http://localhost:8090/api/user/list",{
  headers: authHeader()
})
    .then((response) => {
      userList.value = response.data

    })

function deleteUser(id:number) {
  axios.put("http://localhost:8090/api/user/" + id).then((response) => {
    userList.value = response.data
  })

}
function pushToEdit(id) {
  router.push({path:`/edit-user/${id}`})
}
</script>

<style scoped>

.user-list{
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  border: 1px solid darkgrey;
  border-radius: 10px;
}
.row {
  display: flex;
  border-bottom: 1px solid darkgrey;
  border-radius: 10px;
  background-color: white;
  height: 60px;
  align-items: center;

}
.column {
  display: flex;
  background-color: #CBD5E0;
  border-bottom: 1px solid darkgrey;
  border-radius: 10px;
  height: 40px;
  align-items: center;
}
.name {
  display: flex;
}
</style>