<template>
  <div id="app">
    <div id="nav">
      <router-link to="/question1">Question 1</router-link> |
      <router-link to="/question2">Question 2</router-link> |
      <router-link to="/question3">Question 3</router-link> |
      <router-link to="/question4">Question 4</router-link> |
      <router-link to="/question5">Question 5</router-link> |
      <router-link to="/question6">Question 6</router-link> |
      <router-link to="/question7">Question 7</router-link> |
      <router-link to="/question8">Question 8</router-link> 
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
