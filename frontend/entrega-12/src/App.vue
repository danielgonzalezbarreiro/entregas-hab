<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  background: #34312d;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #80ffdb;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #64dfdf;
}

#nav a.router-link-exact-active {
  color: #80ffdb;
}
</style>
