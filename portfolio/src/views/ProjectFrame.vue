<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Frame",
    props: {
        // Define props if needed
    },
    setup() {
        // Add any setup logic if required
    },
});
</script>

<template>
<iframe src="https://inspiring-heliotrope-5dd8cc.netlify.app/" width="100%" height="100%"></iframe>        
</template>

<style>
iframe {
    width: 100%;
    height: 500px;
    border: none;
    overflow: hidden;
}
</style>