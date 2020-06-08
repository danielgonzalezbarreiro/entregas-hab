<template>
  <div class="MenuCustom">
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link>|
      <router-link :to="{ name: 'TopArtists' }">Top Artists</router-link>|
      <router-link :to="{ name: 'TopTracks' }">Top Tracks</router-link>|
      <router-link :to="{ name: 'About' }">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuCustom",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.MenuCustom #nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 1.25rem;
}
</style>