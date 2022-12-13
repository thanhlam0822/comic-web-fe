<template>
<div class="title"><h1>Dashboard</h1></div>
  <el-row class="row-bg" justify="space-around" >
    <el-col :span="6"><div class="grid-content " />
      <div class="web-information">
      <div class="detail">
        <div class="user-icon purple-background"><el-icon><Avatar /></el-icon></div>
        <div class="user-amount">
          <div class="user-num">{{totalUser}}</div>
          <div class="text-gray"><router-link class="menu-items" to="/admin/dashboard/user-list">User</router-link></div>
        </div>
      </div>
      </div>
    </el-col>
    <el-col :span="6"><div class="grid-content " />
      <div class="web-information">
        <div class="detail">
          <div class="user-icon blue-background"><el-icon><Paperclip /></el-icon></div>
          <div class="user-amount">
            <div class="user-num">{{totalCategory}}</div>
            <div class="text-gray"><router-link class="menu-items" to="/admin/dashboard/category-list"> Categories </router-link></div>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="6"><div class="grid-content " />
      <div class="web-information">
        <div class="detail">
          <div class="user-icon pink-background"><el-icon><DocumentRemove /></el-icon></div>
          <div class="user-amount">
            <div class="user-num">1000</div>
            <div class="text-gray"><router-link class="menu-items" to="/admin/dashboard/comic-list"> Comics </router-link></div>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
  <router-view> </router-view>

</template>

<script lang="ts" setup>
import {ref} from 'vue'
import axios from "axios";
import {useRouter} from "vue-router";
import authHeader from '@/services/auth-header.js';
 // let totalUser = ref([1])
let totalUser = ref(0)
let totalCategory = ref(0)
axios.get("http://localhost:8090/api/user/list",{
  headers: authHeader()
})
    .then((response) => {
      // userList.value = response.data
      // totalUser.value.splice(0,1,response.data.length)
      totalUser.value = response.data.length
    })
axios.get("http://localhost:8090/api/category/list")
    .then((response) => {
      // userList.value = response.data
      // totalUser.value.splice(0,1,response.data.length)
      totalCategory.value = response.data.length

    })

</script>

<style scoped>
.title {
  font-size: 20px;

}
.web-information {
  border: 1px solid white;
  width: 350px;
  height: 100px;
  border-radius: 0.375rem;
  background-color: white;
}
.user-icon {
  font-size: 30px;
  color: white;

  border-radius: 50%;
  display: flex;
  justify-content: center;
  width: 50px;
  height: 50px;

  align-items: center;
  margin-left: 10px;
}
.web-information {
  display: flex;
  align-items: center;
}
.detail {
  display: flex;
  align-items: center;

}
.user-amount {
  margin-left: 25px;
  font-size: 20px;
}
.text-gray {
  color: #6B7280
}
.purple-background {
  background-color: purple;

}
.blue-background {
  background-color: #2563ebbf;

}
.pink-background {
  background-color: #db2777bf;
}
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
.menu-items {
  color: #6B7280;
  text-decoration: none;
}
</style>