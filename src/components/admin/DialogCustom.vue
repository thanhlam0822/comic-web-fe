<template>

  <el-button @click="centerDialogVisible = true" type="danger" >Delete</el-button>
  <div v-for="list in lists" :key="list">


    <el-dialog v-model="centerDialogVisible" title="Warning" width="30%" center>
    <span>
      Do you want to delete this category??
    </span>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="$emit('delete')">
          Confirm
        </el-button>
      </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import { ref,defineProps,defineEmits } from 'vue'
defineProps(['lists'])
defineEmits(['delete'])
const centerDialogVisible = ref(false)
</script>
<style scoped>


</style>