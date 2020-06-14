<template>
  <div>
    <vue-headful title="About - HACK A MARKET" description="Info from the project" />
    <MenuCustom></MenuCustom>
    <div class="about">
      <h1>Learning web developing from 0</h1>
      <h2>
        Hack a market project, learning Vuejs by
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
.about {
  margin: 1rem;
}
.about h1 {
  margin: 1rem;
}
.about h2 {
  margin: 1rem;
}
.logo img {
  border-radius: 50%;
  width: 12rem;
  height: 12rem;
  border: 4px solid #ff6d00;
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
  color: #ff6d00;
  margin: 1rem;
}
.lnav {
  margin-top: 1rem;
}
.lnav a {
  text-decoration: none;
  color: #ff9100;
  padding: 1rem;
}
</style>
