<template>

  <el-button @click="centerDialogVisible = true" type="danger" >Delete</el-button>



    <el-dialog v-model="centerDialogVisible" title="Warning" width="30%" center>
    <span>
      Do you want to delete this data??
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

</template>
<script lang="ts" setup>
import { ref,defineProps,defineEmits } from 'vue'
defineProps(['lists'])
defineEmits(['delete'])
const centerDialogVisible = ref(false)
</script>
<style scoped>


</style>