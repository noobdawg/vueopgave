<template>
  <div class="home">
    <h1 class="header">Salehs køretøjer på lager</h1>
    <post-list></post-list>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: { PostList }
};
</script>


<style scoped>
.header {
  font-size: 35px;
 color: black;
}

</style>

