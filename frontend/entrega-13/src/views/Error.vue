<template>
  <div>
    <vue-headful title="ERROR - HACK A MARKET" description="Error page" />
    <h1>ERROR</h1>
    <p>404</p>
    <button>
      <router-link :to="{ name: 'Login' }">Login</router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "Error"
};
</script>

<style scoped>
* {
  margin: 1rem;
  padding: 1rem;
}
h1 {
  color: #ff6d00;
}

a {
  text-decoration: none;
  color: white;
}

button {
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
button:hover {
  background: #ffaa00;
}
</style>