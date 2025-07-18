<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/form">Form</router-link> |
    <router-link to="/weather">Weather</router-link> |
    <router-link to="/app-old">AppOld</router-link>
    
  </nav>
  <router-view />
</template>




<script setup>
import { RouterLink, RouterView } from 'vue-router';


</script>




<style>
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
