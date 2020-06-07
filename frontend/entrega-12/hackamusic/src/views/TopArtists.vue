<template>
  <div>
    <vue-headful title="Top Artists - HACK A MUSIC" description="Top artists of the world" />
    <MenuCustom></MenuCustom>
    <label for="bySearch">Search artist:</label>
    <input v-model="search" id="search" name="bySearch" type="search" placeholder="Búsqueda..." />
    <Loader :loading="loading"></Loader>
    <ShowTopArtists class="topartists" :artists="filteredArtists"></ShowTopArtists>
    <FooterCustom></FooterCustom>
  </div>
</template>

<script>
import api from "@/api/index.js";
import ShowTopArtists from "@/components/ShowTopArtists.vue";
import Loader from "@/components/Loader.vue";
import MenuCustom from "@/components/MenuCustom.vue";
import FooterCustom from "@/components/FooterCustom.vue";

export default {
  name: "TopArtists",
  components: {
    ShowTopArtists,
    Loader,
    MenuCustom,
    FooterCustom
  },
  data() {
    return {
      artists: [],
      search: "",
      loading: true
    };
  },
  created() {
    api
      .getArtists()
      .then(
        response => (
          (this.artists = response.data.topartists.artist),
          (this.loading = false)
        )
      );
  },
  computed: {
    filteredArtists() {
      if (!this.search) {
        return this.artists;
      }
      return this.artists.filter(artist =>
        artist.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
* {
  color: white;
}
.topartists {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>