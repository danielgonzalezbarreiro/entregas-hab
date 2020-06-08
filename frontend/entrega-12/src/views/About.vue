<template>
  <div class="about">
    <vue-headful title="About - HACK A MUSIC" description="Info from the project" />
    <MenuCustom></MenuCustom>
    <div>
      <h1>Learning web developing from 0</h1>
      <h2>
        Hack a music project, learning Vuejs by
        <p class="name">@DaaniBarreiro</p>
      </h2>
      <h2>
        <figure class="logo">
          <img src="@/assets/img/img.jpg" alt />
        </figure>
      </h2>
      <h3>
        <a class="twitter" href="https://twitter.com/DaaniBarreiro">
          <img src="@/assets/img/twitter.png" alt />
        </a>
        <a
          class="linkedin"
          href="https://www.linkedin.com/in/daniel-gonz%C3%A1lez-barreiro-852a03b5/"
        >
          <img src="@/assets/img/linkedin.png" alt />
        </a>
        <a class="github" href="https://github.com/danielgonzalezbarreiro">
          <img src="@/assets/img/github.png" alt />
        </a>
      </h3>
      <h3 class="lnav">
        Project developed with:
        <a href="https://vuejs.org/">Vuejs</a>
        <a href="https://www.last.fm/api/">LastFM API</a>
        <a href="https://github.com/axios/axios">Axios</a>
        <a href="https://sweetalert2.github.io/">SweetAlert</a>
        <a href="https://github.com/troxler/vue-headful">Vue-Headful</a>
      </h3>
      <button @click="alert"></button>
    </div>
    <FooterCustom></FooterCustom>
  </div>
</template>

<script>
import MenuCustom from "@/components/MenuCustom.vue";
import FooterCustom from "@/components/FooterCustom.vue";
import Swal from "sweetalert2";

export default {
  name: "About",
  components: {
    MenuCustom,
    FooterCustom
  },
  methods: {
    alert() {
      Swal.fire({
        title: "WTF",
        text: "Why u touch here?",
        confirmButtonText: "GO OUT!"
      });
    }
  }
};
</script>

<style scoped>
* {
  margin: 1rem;
}
.logo img {
  border-radius: 50%;
  width: 12rem;
  height: 12rem;
  border: 4px solid #e75a7c;
}
.twitter img {
  width: 4rem;
  padding: 1rem;
}
.linkedin img {
  width: 4rem;
  padding: 1rem;
}
.github img {
  width: 4rem;
  padding: 1rem;
}
.name {
  color: #e75a7c;
}
.lnav a {
  text-decoration: none;
  color: #64dfdf;
}
</style>
