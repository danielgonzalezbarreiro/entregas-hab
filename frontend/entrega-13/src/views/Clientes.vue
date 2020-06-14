<template>
  <div class="client">
    <vue-headful title="Clientes - HACK A MARKET" description="Clientes" />

    <MenuCustom></MenuCustom>
    <Loader :loading="loading"></Loader>
    <h2>Lista de clientes</h2>
    <label for="bySearch">Search client:</label>
    <input v-model="search" id="search" name="bySearch" type="search" placeholder="Búsqueda..." />
    <clients :clients="filteredClients" v-on:edit="openModal" v-on:delete="deleteClients"></clients>
    <!-- MODAL PARA EDITAR -->
    <div class="modal" v-show="modal">
      <div class="modalBox">
        <h2>Editar</h2>
        <label for="newName">Nombre:</label>
        <input v-model="newName" placeholder="Introduce tu nueva nombre" />
        <br />
        <label for="newSurname">Surname:</label>
        <input v-model="newSurname" placeholder="Introduce tu nuevo apellido" />
        <br />
        <label for="newCiudad">Ciudad:</label>
        <input v-model="newCiudad" placeholder="Introduce tu nueva ciudad" />
        <br />
        <label for="newEmpresa">Empresa:</label>
        <input v-model="newEmpresa" placeholder="Introduce tu nueva empresa" />
        <br />
        <br />
        <button @click="editClient(), closeModal()">Update</button>
        <button @click="closeModal()">Cerrar</button>
      </div>
    </div>
    <FooterCustom></FooterCustom>
  </div>
</template>

<script>
import axios from "axios";
import clients from "@/components/ShowClients.vue";
import MenuCustom from "@/components/MenuCustom.vue";
import FooterCustom from "@/components/FooterCustom.vue";
import Loader from "@/components/Loader.vue";

export default {
  name: "Clientes",
  components: {
    clients,
    MenuCustom,
    FooterCustom,
    Loader
  },
  data() {
    return {
      clients: [],
      modal: false,
      newName: "",
      newSurname: "",
      newCiudad: "",
      newEmpresa: "",
      id: null,
      search: "",
      loading: true
    };
  },
  methods: {
    getClients() {
      let self = this;
      axios
        .get("http://localhost:3050/clientes")
        .then(function(response) {
          self.clients = response.data;
          self.loading = false;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    deleteClients(data) {
      let self = this;
      this.id = data;
      axios
        .delete("http://localhost:3050/clientes/del/" + this.id, {
          id: this.id
        })
        .then(function(response) {
          console.log(response);
          location.reload();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    showEditText(data) {
      this.id = data.id;
      this.newCiudad = data.newCiudad;
      this.newEmpresa = data.newEmpresa;
      this.newName = data.newName;
      this.newSurname = data.newSurname;
    },
    editClient() {
      let self = this;
      axios
        .put("http://localhost:3050/clientes/edit/" + self.id, {
          id: self.id,
          nombre: self.newName,
          apellido: self.newSurname,
          ciudad: self.newCiudad,
          empresa: self.newEmpresa
        })
        // if works
        .then(function(response) {
          location.reload();
          console.log(response);
        })
        // if not works
        .catch(function(error) {
          console.log(error);
        });
    },
    openModal(data) {
      this.modal = true;
      this.showEditText(data);
    },
    closeModal() {
      this.modal = false;
    }
  },
  created() {
    this.getClients();
  },
  computed: {
    filteredClients() {
      if (!this.search) {
        return this.clients;
      }
      return this.clients.filter(client =>
        client.nombre.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
}

input {
  margin: 0.5rem;
  border: 1px solid black;
  padding: 0.5rem;
}
.modalBox {
  background: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
.modalBox input {
  margin: 0.5rem;
  border: 1px solid black;
  padding: 0.5rem;
}
.modalBox button {
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
.modalBox button:hover {
  background: #ffaa00;
}
* {
  margin: 0;
  padding: 0;
  background: white;
}
</style>