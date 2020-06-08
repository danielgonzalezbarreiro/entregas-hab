<template>
  <div>
    <vue-headful title="Top Tracks - HACK A MUSIC" description="Top tracks of the world" />
    <MenuCustom></MenuCustom>
    <Loader :loading="loading"></Loader>
    <ShowTopTracks class="toptracks" :tracks="tracks"></ShowTopTracks>
    <FooterCustom></FooterCustom>
  </div>
</template>

<script>
import api from "@/api/index.js";
import ShowTopTracks from "@/components/ShowTopTracks.vue";
import Loader from "@/components/Loader.vue";
import MenuCustom from "@/components/MenuCustom.vue";
import FooterCustom from "@/components/FooterCustom.vue";

export default {
  name: "TopTracks",
  components: {
    ShowTopTracks,
    Loader,
    MenuCustom,
    FooterCustom
  },
  data() {
    return {
      tracks: [],
      loading: true
    };
  },
  created() {
    api
      .getTopTracks()
      .then(
        response => (
          (this.tracks = response.data.tracks.track), (this.loading = false)
        )
      );
  }
};
</script>

<style scoped>
.toptracks {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>