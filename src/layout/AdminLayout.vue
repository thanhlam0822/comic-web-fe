<template>
<div v-if="status1"> Cannot access need login</div>
  <div v-if="status">
    <el-container>
      <el-aside class="custom-background">
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
            <router-link class="menu-items" to="/admin/dashboard"><el-menu-item index="1"><el-icon><List /></el-icon>Dashboard</el-menu-item> </router-link>
            <router-link class="menu-items"  to="/admin/user-add"> <el-menu-item index="2"><el-icon><UserFilled /></el-icon>User</el-menu-item></router-link>
            <router-link class="menu-items"  to="/admin/category-add"><el-menu-item index="3"><el-icon><Checked /></el-icon>Category</el-menu-item> </router-link>
            <router-link class="menu-items"  to="/admin/comic-add">  <el-menu-item index="4"><el-icon><Reading /></el-icon>Comic</el-menu-item></router-link>



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
  </div>

</template>

<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import MenuAdmin from '../components/admin/AdminMenu.vue'
import { ref } from 'vue'

const input = ref('')
let status = ref(false)
let status1 = ref(true)
let content = ref('')
import UserService from '@/services/user.service.js'
UserService.getAdminBoard().then(
    response =>  {
      content.value = response.data
      if (content.value != null) {
        status1.value = false
        status.value = true
      }
    }

)
</script>

<style scoped>

.custom-background {
  background-color: #545c64;
}
.menu-items {
  color: white;
  text-decoration: none;
}
</style>