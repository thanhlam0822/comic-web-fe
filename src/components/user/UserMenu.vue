<template>

       <div class="menu-class">
         <el-menu
             :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect"


         >

             <el-menu-item class="menu-time " index="1"><p class="menu-item-custom"><el-icon><HomeFilled /></el-icon></p></el-menu-item>
             <el-menu-item class="menu-time " index="2"><p class="menu-item-custom">Trending</p></el-menu-item>
             <el-menu-item class="menu-time " index="3"><p class="menu-item-custom">Followed</p></el-menu-item>
             <el-menu-item class="menu-time " index="4"><p class="menu-item-custom">History</p></el-menu-item>
             <el-menu-item class="menu-time " index="5"><p class="menu-item-custom">Category</p></el-menu-item>
             <el-menu-item class="menu-time " index="6"><p class="menu-item-custom">Chart</p></el-menu-item>


         </el-menu>
       </div>



</template>

<script lang="ts" setup>
import {ref} from "vue";
const activeIndex=ref('1')

</script>

<style scoped>
.menu-item-custom {
  font-size: 20px;
}
</style>