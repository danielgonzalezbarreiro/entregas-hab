<template>
  <div class="login">
    <vue-headful title="Login - HACK A MARKET" description="Login" />
    <h1>HACK A MARKET</h1>
    <h2>Login:</h2>
    <input type="text" placeholder="Escribe tu email" v-model="email" />
    <input type="password" placeholder="Escribe tu contraseña" v-model="password" />
    <button @click="login()">LOGIN</button>
    <button class="register">
      <router-link :to="{ name: 'Register' }">Register</router-link>
    </button>
  </div>
</template>

<script>
import { loginUser } from "../api/utils";
import FooterCustom from "@/components/FooterCustom.vue";

export default {
  name: "Login",
  components: {
    FooterCustom
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async login() {
      try {
        await loginUser(this.email, this.password);
        localStorage.setItem("Usuario", this.email);
        this.$router.push("/productos");
      } catch (err) {
        alert(`Error: ${err}`);
      }
    }
  }
};
</script>

<style scoped>
* {
  margin: 1rem;
  padding: 1rem;
}
.login {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}
h1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin-top: 0.5rem;
  color: #ff6d00;
}
input {
  margin: 0.5rem;
  border: 1px solid black;
  padding: 0.5rem;
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

.register a {
  color: white;
  text-decoration: none;
}
</style>