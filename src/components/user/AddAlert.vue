<template>
  <div >
    <el-button @click="dialogVisible = true" type="warning"><div class="alert-icon"><el-icon><WarnTriangleFilled /></el-icon></div>  Error Alert</el-button>
  </div>

  <el-dialog
      v-model="dialogVisible"
      title="Tell us your problem"
      width="30%"

  >
    <el-input v-model="errorContent"></el-input>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="addAlert(currentUser.id,route.params.chapterId)">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import {computed, ref} from 'vue'
import { ElMessageBox } from 'element-plus'
import axios from "axios";
import authHeader from "@/services/auth-header.js";
import {useStore} from "vuex";
import {useRoute} from "vue-router";
let errorContent = ref('');
const dialogVisible = ref(false)
const store = useStore()
let route = useRoute();
let addAlert = (userId:number,chapterId:any) => {
  axios.post(`http://localhost:8090/api/error-alert/${userId}/${chapterId}`,{
    errorContent: errorContent.value
  },{
    headers:authHeader()
  })
  dialogVisible.value = false
}
let currentUser = computed(() => {
  return store.state.auth.user
})
</script>
<style scoped>

</style>