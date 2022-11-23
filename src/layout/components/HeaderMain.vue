<template xmlns:el-col="http://www.w3.org/1999/html">
  <div id="header">
    <el-container>

      <el-header>
        <img class="logo-web"  src="../../img/img.png">



        <el-row justify="center">

          <el-col :span="8" class="search-bar">
            <div>

              <slot/>
              <button @click="$emit('search-comic')">Search</button>
            </div>

          </el-col>
          <el-col span="" class="function">
            <button @click="darkMode()" class="turn-dark"><i class="bi bi-lightbulb light"></i></button>
            <i class="bi bi-bell-fill alert"></i>
            <a  class="login-link link-authentication" href="">Login</a>
            <a class="sign-in-link link-authentication" href=""> Sign-in</a>

          </el-col>
        </el-row>

      </el-header>
    </el-container>
  </div>


</template>
<script lang="ts" setup>
import {ref,defineProps,defineEmits} from 'vue'
import {Search} from '@element-plus/icons-vue'
import axios from "axios";
defineEmits(['search-comic'])


function darkMode() {
  let htmlDarkMode = document.querySelector("html") as HTMLHtmlElement

  if (htmlDarkMode.style.background === 'white') {
    htmlDarkMode.style.background = '#333'
  } else {
    htmlDarkMode.style.background = 'white'
  }
}
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>
<style scoped>
header.el-header {
  display: flex;
  justify-content: space-between;
}
#header {
  background-color: white;
}
.light {
  color: #333333;
  padding: 4px 10px;
  font-size: 15px;
}
.alert {
  color: #333333;
}
.alert:hover {
  font-size:20px
}
.light:hover {
  color: yellow;
  font-size:20px
}
.link-authentication {
  text-decoration: none;
  color: #333333;
  margin-left: 30px;
  font-size: 20px;
}
.link-authentication:hover {
  text-decoration: underline;
}
.function {
  display: flex;
  margin: 20px 30px;
  margin-top: 15px;
}
.search-bar {
  margin: 10px;
}
.light {
  padding: 0px 25px;
}
.turn-dark {
  background-color: white;
  border: 0px;
}
.menu-time {
  font-size: 17px;
}
.menu-item-custom {
  font-size: 20px;
}
</style>