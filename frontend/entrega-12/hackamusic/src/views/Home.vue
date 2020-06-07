<template>
  <div class="home">
    <vue-headful title="HACK A MUSIC" description="The web where you can search your music" />
    <MenuCustom></MenuCustom>
    <Loader :loading="loading"></Loader>
    <ShowTopTags class="showtags" :tags="tags"></ShowTopTags>
    <FooterCustom></FooterCustom>
  </div>
</template>

<script>
// @ is an alias to /src
import api from "@/api/index.js";
import ShowTopTags from "@/components/ShowTopTags.vue";
import Loader from "@/components/Loader.vue";
import MenuCustom from "@/components/MenuCustom.vue";
import FooterCustom from "@/components/FooterCustom.vue";

export default {
  name: "Home",
  components: {
    ShowTopTags,
    Loader,
    MenuCustom,
    FooterCustom
  },
  data() {
    return {
      tags: [],
      loading: true
    };
  },
  created() {
    api
      .getTopTags()
      .then(
        response => (
          (this.tags = response.data.tags.tag), (this.loading = false)
        )
      );
  }
};
</script>

<style scoped>
.showtags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
