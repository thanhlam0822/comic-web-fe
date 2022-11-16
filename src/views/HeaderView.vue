<template>
 <div id="header">
   <div class="container">

     <div class="text-center">
       <el-input
           v-model="input1"
           class="w-50 m-2"
           size="large"
           placeholder="Please Input"
       />
        <i class="bi bi-lightbulb light"></i>
       <i class="bi bi-bell-fill alert"></i>
       <a class="login-link link-authentication" href="">Login</a>
       <a class="sign-in-link link-authentication" href=""> Sign-in</a>


     </div>


   </div>
 </div>
</template>
<script setup>
  import {ref} from 'vue'
  let input1 = ref('s')
</script>
<style scoped>
#header {
  background-color: rebeccapurple;
}
.light {
 color:#ffffff;
  padding: 4px 10px;
}
.alert {
  color: #ffffff;
}
.alert:hover {
  color: black;
}
.light:hover{
  color: black;
}
.link-authentication {
  text-decoration: none;
  color:#fff;
  padding: 0px 5px;
}
.link-authentication:hover {
  text-decoration:underline;
}
</style>