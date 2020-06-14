<template>
  <div>
    <vue-headful title="Productos - HACK A MARKET" description="Productos" />
    <MenuCustom></MenuCustom>
    <Loader :loading="loading"></Loader>
    <label for="bySearch">Busca productos:</label>
    <input v-model="search" id="search" name="bySearch" type="search" placeholder="Búsqueda..." />
    <products class="products" :products="filteredProducts" v-on:buy="buy"></products>
    <FooterCustom></FooterCustom>
  </div>
</template>

<script>
import axios from "axios";
import products from "@/components/ShowProducts.vue";
import MenuCustom from "@/components/MenuCustom.vue";
import FooterCustom from "@/components/FooterCustom.vue";
import Swal from "sweetalert2";
import Loader from "@/components/Loader.vue";

export default {
  name: "Productos",
  components: {
    products,
    MenuCustom,
    FooterCustom,
    Loader
  },
  data() {
    return {
      products: [],
      search: "",
      loading: true
    };
  },
  methods: {
    getProducts() {
      let self = this;
      axios
        .get("http://localhost:3050/productos")
        .then(function(response) {
          self.products = response.data;
          self.loading = false;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    buy() {
      Swal.fire({
        title: "Tu PC está en camino",
        text: "Disfrutalo!",
        confirmButtonText: "OK"
      });
    }
  },
  created() {
    this.getProducts();
  },
  computed: {
    filteredProducts() {
      if (!this.search) {
        return this.products;
      }
      return this.products.filter(product =>
        product.nombre.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  background: white;
}
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

input {
  margin: 0.5rem;
  border: 1px solid black;
  padding: 0.5rem;
}
</style>