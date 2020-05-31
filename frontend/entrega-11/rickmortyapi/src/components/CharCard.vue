<template>
  <div>
    <div class="card" v-for="char in chars" :key="char.id">
      <ul>
        <li>
          <img :src="char.image" alt />
        </li>
        <li>
          <h2>{{ char.name }}</h2>
        </li>
        <li>
          <p>Id: {{char.id}}</p>
        </li>
        <li>
          <p
            :class="{green: char.status ==='Alive', red:char.status==='Dead', orange: char.status === 'unknown'}"
          >Estado: {{char.status}}</p>
        </li>
        <li>
          <p>Especie: {{char.species}}</p>
        </li>
        <li>
          <p>Xénero: {{char.gender}}</p>
        </li>
        <li>
          <p>Orixe: {{char.origin.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharCard",
  props: {
    chars: Array
  }
};
</script>

<style scoped>
.red {
  color: red;
}

.green {
  color: green;
}

.orange {
  color: orange;
}
.card {
  width: 25%;
  border: 5px solid rgb(124, 237, 99);
  margin: 1rem;
  background-color: rgb(0, 176, 200);
  color: white;
  border-radius: 5%;
}
h2 {
  font-size: 2.5rem;
  color: yellow;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
ul > li {
  margin: 1rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
}
ul > li > img {
  max-width: 150px;
  border-radius: 20%;
  border: 3px solid rgb(124, 237, 99);
}
</style>
