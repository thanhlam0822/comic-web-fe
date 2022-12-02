<template>
  <el-container class="search-bar">
        <el-col :span="7" >
          <el-input
              v-model="searchQuery"
              class="w-50 m-2"
              size="large"
              placeholder="Search Comic here"
              :suffix-icon="Search"
              @keyup.enter="search"
          />
        </el-col>
      </el-container>
</template>
<script lang="ts" setup>
import {useRouter} from "vue-router";
import {ref} from "vue";
import { Search } from '@element-plus/icons-vue'
const router = useRouter()
let searchQuery = ref('')
function search() {
  router.push({path:"/search-comic",query:{keyword:searchQuery.value}})
}
</script>

<style scoped>
.search-bar {
  display: flex;
  justify-content: center;
  background: white;
}
</style>