<template>
  <div>
    <div class="tracks" v-for="track in tracks" :key="track.id">
      <a :href="track.artist.url">
        <h3>{{track.artist.name}}</h3>
        <p>{{track.name}}</p>
        <p>Listeners: {{track.listeners}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowTopTracks",
  props: {
    tracks: Array
  }
};
</script>

<style scoped>
.tracks {
  width: 15%;
  margin: 1rem;
  color: #64dfdf;
  border: 1px solid #64dfdf;
}
a {
  text-decoration: none;
  color: #64dfdf;
}
p {
  color: white;
}
</style>