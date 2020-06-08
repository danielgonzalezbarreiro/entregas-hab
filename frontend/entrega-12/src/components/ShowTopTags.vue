<template>
  <div>
    <div class="tags" v-for="tag in tags" :key="tag.id">
      <a :href="tag.url">
        <h2>{{tag.name}}</h2>
        <p>Reach: {{tag.reach}}</p>
        <p>Taggings: {{tag.taggings}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowTopTags",
  props: {
    tags: Array
  }
};
</script>

<style scoped>
.tags {
  width: 15%;
  margin: 1rem;
  color: #64dfdf;
  border: 1px solid #64dfdf;
}
a {
  text-decoration: none;
  color: #64dfdf;
}
h2 {
  color: white;
}
</style>