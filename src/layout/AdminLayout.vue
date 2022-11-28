<template>
  <el-container>
    <el-aside>
      <menu-admin>
        <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="1"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
        >
          <router-link to="dashboard"><el-menu-item index="1"><el-icon><List /></el-icon>Dashboard</el-menu-item> </router-link>
          <router-link to="user-control">  <el-menu-item index="2"><el-icon><UserFilled /></el-icon>User</el-menu-item></router-link>
          <el-menu-item index="3"><el-icon><Checked /></el-icon>Category</el-menu-item>
          <el-menu-item index="4"><el-icon><Reading /></el-icon>Comic</el-menu-item>
        </el-menu>
        </menu-admin>

    </el-aside>
    <el-container>
      <el-header>
        <el-col :span="4">
          <div class="search-bar">
            <el-input
                v-model="input"
                class="w-50 m-2"
                size="large"
                placeholder="Please Input"
                :suffix-icon="Search"
            />
          </div>

        </el-col>

      </el-header>

      <el-main><router-view/></el-main>

    </el-container>
  </el-container>

</template>

<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import MenuAdmin from './components/admin/AdminMenu.vue'
import { ref } from 'vue'
const input = ref('')

</script>

<style scoped>
header.el-header {
  display: flex;
  align-items: center;
  background: white;
  border-bottom: 3px solid deepskyblue;
}
main.el-main {
  background-color: #e5e7eb;
}
</style>