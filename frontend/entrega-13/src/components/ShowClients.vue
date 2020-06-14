<template>
  <div>
    <div class="client" v-for="(client,index) in clients" :key="client.id">
      <p>ID: {{ client.id }}</p>
      <p>Nombre: {{ client.nombre }}</p>
      <p>Apellido: {{ client.apellido }}</p>
      <p>Ciudad: {{ client.ciudad }}</p>
      <p>Empresa: {{ client.empresa }}</p>
      <button @click="editClientEvent(index)">EDIT</button>
      <button @click="deleteClientEvent(index)">DELETE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowClients",
  props: {
    clients: Array
  },
  methods: {
    editClientEvent(index) {
      //SAVING INFO INTO SELECTED NOTE
      let data = this.clients[index];
      //SENDING NOTE'S INFO TO VIEW
      this.$emit("edit", data);
    },
    deleteClientEvent(index) {
      let data = this.clients[index].id;

      this.$emit("delete", data);
    }
  }
};
</script>

<style scoped>
.client {
  width: 20%;
  padding: 1rem;
  margin: 2rem auto;
  background-color: #dee2e6;
}

.client button {
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

.client button:hover {
  background: #ffaa00;
}
</style>