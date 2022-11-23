<template>
  <div class="search-bar">
        <div class="search-menu">
          <slot/>
        </div>
  </div>
</template>

<script>
export default {
  name: "SearchComic"
}
</script>

<style scoped>
.search-bar {
  display: flex;
  justify-content: center;
  background-color: white;
}
.search-menu {
  width: 500px;
}
</style>