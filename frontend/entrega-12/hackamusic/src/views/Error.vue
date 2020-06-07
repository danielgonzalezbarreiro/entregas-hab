<template>
  <div>
    <vue-headful title="ERROR - HACK A MUSIC" description="Error page" />
    <h1>ERROR</h1>
    <p>404</p>
    <router-link :to="{ name: 'Home' }">Home</router-link>
  </div>
</template>

<script>
export default {
  name: "Error"
};
</script>

<style>
</style>