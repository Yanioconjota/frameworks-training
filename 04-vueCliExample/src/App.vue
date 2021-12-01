<template>
  <div id="app">
    <!-- <app-user></app-user> -->
    <div class="header">
      <router-link to="/">
        <img class="logo" src="./assets/logo.png" alt="">
      </router-link>
      <router-link to="/">Home</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/account">Account</router-link>
    </div>
    <router-view></router-view>
    <p>This is a text outside router view</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
@import url('https://pro.fontawesome.com/releases/v6.0.0-beta3/css/all.css');
body {
  margin: 0;
}
#app {
  font-family: 'Roboto', sans-serif;
  color: #2c3e50;
  > *:not(.header) {
    padding: 15px;
  }
}

.header {
  text-align: center;
  background-color: #08834c;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
      text-transform: uppercase;
      text-decoration: none;
      padding: 0 15px;
      color: #fff;
    }
    img {
      width: 23px;
      height: 23px;
    }
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
