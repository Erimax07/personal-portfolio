<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Frame",
    props: {
        // Define props if needed
    },
    
});
</script>
<script setup lang="ts">
import { ref } from 'vue';
import ProjectLink from '@/components/ProjectLink.vue';
import { useProjectStore } from '@/stores';


const projectStore = useProjectStore()
const id = $route.params.id
</script>
<template>
<iframe :src="projectStore.returnById($route.params.id).url" width="100%" height="100%"></iframe>        

</template>

<style>
iframe {
    width: 100%;
    height: 500px;
    border: none;
    overflow: hidden;
}
</style>