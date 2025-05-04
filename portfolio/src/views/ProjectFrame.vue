<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "Frame",
  props: {
    // Define props if needed
  },
});
</script>
<script setup lang="ts">
import { ref } from "vue";
import ProjectLink from "@/components/ProjectLink.vue";
import { useProjectStore } from "@/stores";

const projectStore = useProjectStore();
const route = useRoute();
const id = parseInt(route.params.id as string);

const project = ref(projectStore.returnById(id));
const projectURL = ref(project.value.url);
console.log(projectURL, id);
</script>

<template>
  <div class="page">
    <div class="project-frame">
      <h1>{{ project.id }} : {{ project.name }}</h1>
      <p>{{ project.description }}</p>
    </div>
    <hr
      style="width: 100%; border: 0; border-top: 2px solid #ccc; margin: 20px 0"
    />
    <iframe :src="projectURL" width="100%" height="100%"></iframe>

    <p>
      Project URL: <a :href="projectURL">{{ projectURL }}</a>
      
    </p>
  </div>
</template>

<style>
iframe {
  width: 100%;
  border: 3px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 16/9;
}
</style>
