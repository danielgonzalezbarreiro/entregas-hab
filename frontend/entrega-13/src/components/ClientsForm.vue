<template>
  <div>
    <div class="clientsform">
      <p v-show="required">Tienes datos aún por rellenar</p>
      <label for="nombre">Nombre:</label>
      <input type="text" name="nombre" placeholder="Nombre del cliente" v-model="nombre" />
      <br />
      <label for="apellido">Apellido:</label>
      <input type="text" name="apellido" placeholder="apellido del cliente" v-model="apellido" />
      <br />
      <label for="ciudad">Ciudad:</label>
      <input type="text" name="ciudad" placeholder="Ciudad del cliente" v-model="ciudad" />
      <br />
      <label for="empresa">Empresa:</label>
      <input type="text" name="empresa" placeholder="Empresa del cliente" v-model="empresa" />
      <br />
      <button @click="addClientEvent()">CREAR</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowClients",
  props: {
    correctData: Boolean,
    required: Boolean
  },
  data() {
    return {
      nombre: "",
      apellido: "",
      ciudad: "",
      empresa: ""
    };
  },
  methods: {
    addClientEvent(index) {
      //SENDING NOTE'S INFO TO VIEW
      this.$emit(
        "addclient",
        this.nombre,
        this.apellido,
        this.ciudad,
        this.empresa
      );
    }
  }
};
</script>

<style scoped>
.clientsform input {
  margin: 0.5rem;
  border: 1px solid black;
  padding: 0.5rem;
}
.clientsform button {
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
.clientsform button:hover {
  background: #ffaa00;
}
</style>