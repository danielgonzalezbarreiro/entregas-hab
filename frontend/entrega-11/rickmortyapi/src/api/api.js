// INICIANDO O USO DE AXIOS
const axios = require('axios').default;
// BASE URL DA API
const apiUrl = 'https://rickandmortyapi.com/api'

// GUNCION PARA COLLER TODOS OS CHARS
function getAll() {
  return axios
    .get(`${apiUrl}/character`)
}
export default {
  getAll
}