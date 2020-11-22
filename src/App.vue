<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Køretøjer</router-link> 
      &nbsp;
      <router-link to="/create">Tilføj køretøj</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 40px;
}

#nav a {
  font-weight: bold;
  color: #000000;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #3371f8;
}
</style>
