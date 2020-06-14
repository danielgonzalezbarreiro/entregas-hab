<template>
  <div class="register">
    <vue-headful title="Register - HACK A MARKET" description="Register" />

    <MenuCustom></MenuCustom>
    <!-- FORMULARIO -->
    <div class="registerform">
      <p v-show="required">Tienes datos aún por rellenar</p>
      <label for="email">Email:</label>
      <input type="email" name="email" placeholder="Email" v-model="email" />
      <br />
      <label for="password">Password:</label>
      <input type="password" name="password" placeholder="password" v-model="password" />
      <br />
      <button @click="addUser(email, password)">CREAR</button>
    </div>
    <FooterCustom></FooterCustom>
  </div>
</template>

<script>
import axios from "axios";
import MenuCustom from "@/components/MenuCustom.vue";
import FooterCustom from "@/components/FooterCustom.vue";

export default {
  name: "Register",
  components: {
    MenuCustom,
    FooterCustom
  },
  data() {
    return {
      email: "",
      password: "",
      correctData: false,
      required: false
    };
  },
  methods: {
    validatingData() {
      if (this.email === "" || this.password === "") {
        this.correctData = false; // NON ENVIAR
        this.required = true; // MOSTRA O MENSAXE
      } else {
        this.correctData = true; // ENVIAR
        this.required = false; // NON MOSTRA O MENSAXE
      }
    },
    addUser(email, password) {
      this.validatingData(); // VALIDANDO DATOS DO FORM
      if (this.correctData === true) {
        let self = this;
        axios
          .post("http://localhost:3050/register", {
            email: self.email,
            password: self.password
          })
          .then(function(response) {
            self.emptyFields();
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        alert("No has rellenado todos los campos.");
      }
    },
    emptyFields() {
      this.email = "";
      this.password = "";
    }
  }
};
</script>

<style scoped>
.registerform {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}
.registerform input {
  margin: 0.5rem;
  border: 1px solid black;
  padding: 0.5rem;
}

.registerform button {
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
.registerform button:hover {
  background: #ffaa00;
}
</style>