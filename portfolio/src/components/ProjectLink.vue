<template>
    <a :href="project.url" target="_blank" rel="noopener noreferrer">
    <div class="wrapper">
        <div class="project-link">
            <h2>{{ project.name }}</h2>
            <p>{{ project.description }}</p>
        </div>
        <img src="" alt="Project Image" class="project-image" />
    </div>
    </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
interface linkInterface{
        name: string,
        description: string,
        url: string,
        icon: string
    }

export default defineComponent({
    
    name: "PorjectLink",
    props: {
        project: {
            type: Object as () => linkInterface,
            required: true,
        },
        
    },
    setup() {
        // Add any setup logic if required
    },
});
</script>

<style>

img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-left: 20px;
}
.wrapper {
    display: flex;
    
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: center;
    margin: 20px 0;
    border: 3px solid #ccc;
    background-color: aliceblue;
    max-height: 500px;
    max-width: 300px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s, box-shadow 0.2s;
}

</style>