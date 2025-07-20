<template>
  <nav>
    <router-link to="/" class="nav-link">Home</router-link> |
    <router-link to="/form" class="nav-link">Form</router-link> |
    <router-link to="/weather" class="nav-link">Weather</router-link> |
    <router-link to="/app-old" class="nav-link">AppOld</router-link>
    
  </nav>
  <router-view />
</template>




<script setup>
import { RouterLink, RouterView } from 'vue-router';


</script>




<style scoped>

nav{
  max-width: 800px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #6a95a6;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(131, 113, 113, 0.2);
  margin-bottom: 20px;
}
.nav-link{
  color: #031035;
  font-size: 20px;
  text-decoration: none;
  font-weight: bold;
  padding: 12px 20px;
  border-radius: 10px;
  margin: 0 10px;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.nav-link:hover{
  background-color: #152e38;
  color: #7b8bae;
}
.nav-link.router-link-active{
  background-color: #3b5c69;;
  color: #100d0d;
}
nav > *:not(:last-child)::after{
  content: "•";
  color: #2b3d42;
  margin-left: 10px;
  margin-right: 10px;
}





#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.my-form{
  padding: 20px;
  border: 2px solid #465c98;
  border-radius: 10px;
  margin-top: 10px;
}



</style>
