<template>


    <div class=" menu-admin">

        <div class="logo-image">
          <img class="logo-web"  src="../../img/img-modified.png">
        </div>
        <slot></slot>
    </div>

</template>

<script lang="ts" setup>


const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.menu-admin {
  background-color: #545c64 ;
  height: 100vh
}
.logo-image {
  display: flex;
  justify-content: center;
}
</style>