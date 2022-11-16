<template>
  <div class="container">
   <div class="text-center">
     <el-input
         v-model="input1"
         class="w-50 m-2"
         size="large"
         placeholder="Please Input"
     />
       <i class="bi bi-lightbulb"></i>


       <i class="bi bi-bell-fill"></i>
     <a href="">Login</a>
     <a href="">Sign-in</a>
   </div>

  </div>
</template>
<script>
  import {ref} from 'vue'
  export default {
    setup() {
      let input1 = ref('')
      return {
        input1
      }
    }
  }
</script>