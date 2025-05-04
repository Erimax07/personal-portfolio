<template>
    <RouterLink :to="`/projectFrame/${project.id}`" class="routerlink">
    <div class="wrapper">
        <div class="project-link">
            <h2>{{ project.name }}</h2>
            <p>{{ project.description }}</p>
        </div>
        <!-- 
         -->
    </div>
</RouterLink>
</template>

<script lang="ts">
import { defineComponent } from "vue";
interface linkInterface{
        id:number,
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
h2{
    margin: 1rem;
    ;
}

.routerlink {
    text-decoration: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}   
.project-link {
    margin: 2em;
    margin-right: 5em;
}

.wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 50em;
    padding: 2,5rem;
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
    color: black;
}

.wrapper:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    text-decoration: none;
}

</style>