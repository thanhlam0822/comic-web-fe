<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"

  >


    <el-menu-item class="menu-time " index="2"><p class="menu-item-custom">Trending</p></el-menu-item>
    <el-menu-item class="menu-time " index="3"><p class="menu-item-custom">Followed</p></el-menu-item>
    <el-menu-item class="menu-time " index="4"><p class="menu-item-custom">History</p></el-menu-item>
    <el-menu-item class="menu-time " index="5"><p class="menu-item-custom">Category</p></el-menu-item>
    <el-menu-item class="menu-time " index="6"><p class="menu-item-custom">Chart</p></el-menu-item>

  </el-menu>
</template>

<script>
export default {
  name: "MenuMain.vue"
}
</script>

<style scoped>

</style>