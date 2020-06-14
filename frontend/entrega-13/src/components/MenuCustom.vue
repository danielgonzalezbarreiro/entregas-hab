<template>
  <div class="MenuCustom">
    <div id="nav">
      <router-link :to="{ name: 'Clientes' }">Clientes</router-link>
      <router-link :to="{ name: 'Productos' }">Productos</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
    </div>
    <div class="titulo">
      <h1>HACK A MARKET</h1>
    </div>
    <div class="username">
      <p>{{userName}}</p>
      <button @click="logoutUser()">Logout</button>
    </div>
  </div>
</template>

<script>
import { clearLogin } from "../api/utils";
export default {
  name: "MenuCustom",
  props: {},
  data() {
    return {
      userName: ""
    };
  },
  methods: {
    logoutUser() {
      this.userName = "";
      this.$router.push("/");
      return clearLogin();
    },
    getUserName() {
      this.userName = localStorage.getItem("Usuario");
    }
  },
  created() {
    this.getUserName();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-family: "Permanent Marker", cursive;
}
.MenuCustom {
  display: flex;
  flex-direction: row;
  padding: 1rem;
  color: #ff6d00;
}

.MenuCustom #nav {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 1.25rem;
  align-content: center;
  margin: 0;
  padding: 0;
}

#nav a {
  margin-left: 1rem;
}

.username {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-end;
  flex-grow: 1;
  margin-right: 2rem;
}
.username p {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin-top: 1.1rem;
}

.username button {
  width: 5rem;
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

.username button:hover {
  background: #ffaa00;
}

.titulo {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-content: center;
  flex-grow: 1;
  margin-top: 0.5rem;
  text-shadow: 2px 2px black;
}
</style>