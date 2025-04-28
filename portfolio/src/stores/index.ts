import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectStore = defineStore('counter', () => {
    interface linkInterface{
        id:number,
        name: string,
        description: string,
        url: string,
        icon: string
    }
    const projects = ref([
        { id:0, name: 'Mandelbrot Generator', description: 'Generates visual representations of the Mandelbrot set, a complex mathematical fractal.', url: 'https://inspiring-heliotrope-5dd8cc.netlify.app/', icon: '@assets/mandelbrot.jpeg' },
        { id:1, name: 'Project 2', description: 'Description 2', url: 'https://youtu.be/dQw4w9WgXcQ?si=60kpXSDz_EK9HRwN', icon: 'icon2' },
        { id:2, name: 'Project 3', description: 'Description 3', url: 'https://youtu.be/dQw4w9WgXcQ?si=60kpXSDz_EK9HRwN', icon: 'icon3' },
    ]);

    const addProjects = (id:number, name: string, description: string, url: string, icon: string) => {
        projects.value.push({id, name, description, url, icon });
    }

    const returnById = (id:number):linkInterface=>{
        const index = projects.value.findIndex(p => p.id == id)
        return projects.value[index];
    }

    return { projects, returnById }
  })