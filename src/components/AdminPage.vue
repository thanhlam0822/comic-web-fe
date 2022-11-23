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
          <el-menu-item index="1"><el-icon><List /></el-icon>Dashboard</el-menu-item>
          <el-menu-item index="2"><el-icon><UserFilled /></el-icon><router-link to="/user-control">User</router-link></el-menu-item>
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
import {ref} from 'vue'
import MenuAdmin from './layout/MenuAdmin.vue'
import UserControl from './layout/MenuAdmin.vue'
import { Search } from '@element-plus/icons-vue'
const input = ref('')
const tab = UserControl
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