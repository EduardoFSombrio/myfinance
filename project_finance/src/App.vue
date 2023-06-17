<template>
  <div id="menu">
    <img alt="My Finance logo" src="./assets/myfinance.png">
    <MainMenu/>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue'

export default {
  name: 'App',
  components: {
    MainMenu
  }
}
</script>

<style>
#menu {
  margin-top: 80px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #4aa294;
  background-color: #5a141b;
  text-align:center;
  position: absolute; 
  top: 0; 
  left: 0; 
  bottom: 0; 
  width: 100%; 
  right: 0
}
</style>
