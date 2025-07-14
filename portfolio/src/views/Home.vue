<script setup lang="ts">

import Frame from "@/views/ProjectFrame.vue";
import { useProjectStore } from "@/stores";
import { ref } from "vue";
const projectStore = useProjectStore();
const projects = ref(projectStore.projects);
</script>

<template>
    <ul>
        <li v-for="(item, index) in projects" :key="index">
            <router-link :to="`/ProjectFrame/${item.id}`" style="text-decoration: none; color: inherit;">
            <h3>{{ item.name }}</h3> 
            {{ item.description }}
            </router-link>
        </li>
    </ul>
</template>

<style scoped>
ul{
    display: flex;
    flex-direction: column;
    align-items: center;
}
li{
    margin: 0.5rem;
    border: 3px black solid;
    border-radius: 0.5rem;
    display: flex;
    padding: 0.5rem;
    width: 50%;
}
</style>
