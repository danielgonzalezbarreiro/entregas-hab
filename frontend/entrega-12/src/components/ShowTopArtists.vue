<template>
  <div>
    <div class="artists" v-for="artist in artists" :key="artist.id">
      <a :href="artist.url">
        <h3>{{artist.name}}</h3>
        <p>Listeners: {{artist.listeners}}</p>
        <img :src="artist.image[2]['#text']" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowTopArtists",
  props: {
    artists: Array
  }
};
</script>

<style scoped>
.artists {
  width: 15%;
  margin: 1rem;
  color: #64dfdf;
}
a {
  text-decoration: none;
  color: #64dfdf;
}
h3 {
  color: white;
}
</style>