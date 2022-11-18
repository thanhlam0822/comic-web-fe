<template xmlns:el-col="http://www.w3.org/1999/html">
  <div id="header">
    <el-container>
      <el-header>
        <el-row justify="center">
          <el-col :span="8" class="search-bar">
            <div>
              <el-input
                  v-model="input"
                  class="w-50 m-2 "
                  size="large"
                  placeholder="Please Input"
                  :suffix-icon="Search"


              />
            </div>
          </el-col>
          <el-col :span="16" class="function">
            <button @click="darkMode" class="turn-dark"><i class="bi bi-lightbulb light"></i></button>
            <i class="bi bi-bell-fill alert"></i>
            <a class="login-link link-authentication" href="">Login</a>
            <a class="sign-in-link link-authentication" href=""> Sign-in</a>

          </el-col>
        </el-row>

      </el-header>
    </el-container>
  </div>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      @select="handleSelect"
  >
    <el-menu-item class="menu-time" index="1">
      <div class="main-page">
        <el-icon>
          <HomeFilled/>
        </el-icon>
      </div>
    </el-menu-item>
    <el-menu-item class="menu-time" index="2">Trending</el-menu-item>
    <el-menu-item class="menu-time" index="3">Followed</el-menu-item>
    <el-menu-item class="menu-time" index="4">Read History</el-menu-item>
    <el-menu-item class="menu-time" index="5">Category</el-menu-item>
    <el-menu-item class="menu-time" index="6">Chart</el-menu-item>
  </el-menu>
  <body>
  <div class="dark-mode"></div>
  </body>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
import { Calendar, Search } from '@element-plus/icons-vue'

let input = ref('')


function darkMode() {
  let htmlDarkMode = document.querySelector("html") as HTMLHtmlElement;
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
#header {
  background-color: rebeccapurple;
}

.light {
  color: #ffffff;
  padding: 4px 10px;
  font-size: 15px;
}

.alert {
  color: #ffffff;
}

.alert:hover {
  color: black;
}

.light:hover {
  color: black;
}

.link-authentication {
  text-decoration: none;
  color: #fff;
  margin-left: 30px;
  font-size: 20px;
}

.link-authentication:hover {
  text-decoration: underline;
}

.function {
  margin: 20px 30px;
}

.search-bar {
  margin: 10px;
}

.light {
  padding: 0px 25px;
}

.turn-dark {
  background-color: rebeccapurple;
  border: 0px;
}

.menu-time {
  font-size: 17px;
}
</style>