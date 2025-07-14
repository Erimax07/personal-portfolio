<template>
  <div class="page">
    <div class="dashboard">
      <h1>My Portfolio</h1>
      <p>Welcome to my portfolio! Here are some of my previous projects:</p>
      ProjectLink
    </div>
    <div class="procectList">


    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ProjectLink from "@/components/ProjectLink.vue";
import { useProjectStore } from "@/stores";
import ProjectFrame from "@/views/ProjectFrame.vue";

const projectStore = useProjectStore();
const projects = ref(projectStore.projects);

interface linkInterface {
  id: number;
  name: string;
  description: string;
  url: string;
  icon: string;
}

const props = defineProps<{
  title?: string;
  likes?: number;
}>();

console.log(props);
</script>

<style scoped>
.dashboard {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.procectList {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}

h1 {
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
}



a:hover {
  text-decoration: underline;
}
</style>
