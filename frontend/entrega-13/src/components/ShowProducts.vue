<template>
  <div class="products">
    <div class="showproduct" v-for="product in products" :key="product.id">
      <h2>{{ product.nombre }}</h2>
      <img :src="product.img" alt />
      <h3>{{ product.descripcion }}</h3>
      <p>{{ product.precio + '$' + ' Stock: ' + product.stock }}</p>

      <button @click="buyEvent">Comprar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowProducts",
  props: {
    products: Array
  },
  methods: {
    buyEvent() {
      this.$emit("buy");
    }
  }
};
</script>

<style scoped>
* {
  font-family: "Permanent Marker", cursive;
}

.showproduct img {
  width: 20rem;
  height: 20rem;
}
.showproduct h2 {
  color: #ff8500;
  margin-bottom: 1rem;
  text-shadow: 2px 2px black;
}
.showproduct h3 {
  margin: 1rem;
  font-size: 1.5rem;
  color: #ff8500;
  text-shadow: 2px 2px black;
}
.showproduct p {
  margin: 1rem;
  font-size: 1.5rem;
  color: black;
}
.showproduct {
  background: #dee2e6;
  padding: 1rem;
  margin: 0.5rem;
}
.showproduct button {
  width: 10rem;
  cursor: pointer;
  text-align: center;
  color: white;
  background: #ff6d00;
  padding: 0.5rem;
  margin: 0.667rem;
  font-weight: bold;
  align-self: center;
  justify-self: center;
}
.showproduct button:hover {
  background: #ffaa00;
}
</style>