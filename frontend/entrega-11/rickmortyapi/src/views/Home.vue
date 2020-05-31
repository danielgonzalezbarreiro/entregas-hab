<template>
  <div class="home">
    <header>
      <!-- LOGO -->
      <img class="logo" src="@/assets/img/logo.png" alt />
    </header>
    <!-- BARRA DE BUSQUEDA -->
    <label for="bySearch">Busca o teu personaxe</label>
    <input v-model="search" id="search" name="bySearch" type="search" placeholder="Búsqueda..." />
    <!-- TARXETAS -->
    <CharCard class="chardCard" :chars="filteredChars"></CharCard>
  </div>
</template>

<script>
// @ is an alias to /src
import CharCard from "@/components/CharCard.vue";
import api from "@/api/api.js";

export default {
  name: "Home",
  components: {
    CharCard
  },
  data() {
    return {
      chars: [],
      search: "",
      char: [],
      id: null
    };
  },
  computed: {
    filteredChars() {
      if (!this.search) {
        return this.chars;
      }
      // FACEMOS FILTER PARA FILTRAR AS BUSQUEDAS NO ARRAY
      return this.chars.filter(
        char =>
          char.name.toLowerCase().includes(this.search.toLowerCase()) ||
          char.gender.toLowerCase().includes(this.search.toLowerCase()) ||
          char.status.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  created() {
    api.getAll().then(response => (this.chars = response.data.results));
  }
};
</script>

<style scoped>
header img {
  display: block;
  margin: auto;
}
.chardCard {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>