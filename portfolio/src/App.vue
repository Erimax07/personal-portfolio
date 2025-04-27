<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import About from './views/About.vue'
import ProjectFrame from './views/ProjectFrame.vue';
</script>

<template>
    <nav>
      <h1><RouterLink to="/">Portfolio</RouterLink></h1>
      <div class="buttons">
        <RouterLink to="/About">About</RouterLink>
        <RouterLink to="/projectFrame">Describtion</RouterLink>
        <RouterLink to="/Transactions">Home</RouterLink>

      </div>
    </nav>
    <RouterView />
  

</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

 nav {
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: antiquewhite;
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h1 > * {
  margin: 0.5rem 1rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0.5rem 1rem;
}

.buttons > * {
  font-size: 1rem;
  color: #333;
  text-decoration: none;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.buttons > *:hover {
  background-color: #f3d9a4;
  color: black;
}
</style>
