<template>
  <div>
    <vue-headful title="Add a client - HACK A MARKET" description="Add clients" />
    <MenuCustom></MenuCustom>
    <!-- FORMULARIO -->
    <clientsform :correctData="correctData" :required="required" v-on:addclient="addClient"></clientsform>
    <FooterCustom></FooterCustom>
  </div>
</template>

<script>
import axios from "axios";
import clientsform from "@/components/ClientsForm.vue";
import MenuCustom from "@/components/MenuCustom.vue";
import FooterCustom from "@/components/FooterCustom.vue";

export default {
  name: "AddClient",
  components: {
    clientsform,
    MenuCustom,
    FooterCustom
  },
  data() {
    return {
      correctData: false,
      required: false
    };
  },
  methods: {
    validatingData(nombre, apellido, ciudad, empresa) {
      if (
        this.nombre === "" ||
        this.apellido === "" ||
        this.ciudad === "" ||
        this.empresa === ""
      ) {
        this.correctData = false; // NON ENVIAR
        this.required = true; // MOSTRA O MENSAXE
      } else {
        this.correctData = true; // ENVIAR
        this.required = false; // NON MOSTRA O MENSAXE
      }
    },
    addClient(nombre, apellido, ciudad, empresa) {
      this.validatingData(); // VALIDANDO DATOS DO FORM
      if (this.correctData === true) {
        let self = this;
        axios
          .post("http://localhost:3050/add-client", {
            nombre: nombre,
            apellido: apellido,
            ciudad: ciudad,
            empresa: empresa
          })
          .then(function(response) {
            location.reload();
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
      this.nombre = "";
      this.apellido = "";
      this.ciudad = "";
      this.empresa = "";
    }
  }
};
</script>

<style scoped>
p {
  color: red;
}
</style>