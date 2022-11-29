<template xmlns:el-col="http://www.w3.org/1999/html">
  <div id="header">

      <el-header>
        <div class="logo-image">
          <img class="logo-web"  src="../../img/img.png">
        </div>

      </el-header>
    <div class="header-item">
      <div><slot></slot></div>
      <div><i class="bi bi-bell-fill alert"></i></div>
      <div><a  class="login-link link-authentication" href="">Login</a></div>
      <div><a class="sign-in-link link-authentication" href=""> Sign-in</a></div>
    </div>
  </div>


</template>
<script lang="ts" setup>


</script>
<style scoped>
div#header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
}
.header-item {
  display: flex;
  width: 300px;
  justify-content: space-evenly;

}

.light {
  color: #333333;
  font-size: 15px;

}
.light:hover {
  color: yellow;
  font-size:25px
}
.turn-dark {
  background-color: white;
  border: 0px;
}
.alert {
  color: #333333;
}
.alert:hover {
  font-size:20px
}
.link-authentication {
  text-decoration: none;
  color: #333333;
  margin-left: 30px;
  font-size: 20px;
}
.link-authentication:hover {
  text-decoration: underline;
}



</style>