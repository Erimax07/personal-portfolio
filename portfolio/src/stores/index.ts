import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectStore = defineStore('counter', () => {
    interface linkInterface{
        name: string,
        description: string,
        url: string,
        icon: string
    }
    const projects = ref([
        { name: 'Mandelbrot Generator', description: 'Generates visual representations of the Mandelbrot set, a complex mathematical fractal.', url: 'https://youtu.be/dQw4w9WgXcQ?si=60kpXSDz_EK9HRwN', icon: '@assets/mandelbrot.jpeg' },
        { name: 'Project 2', description: 'Description 2', url: 'https://youtu.be/dQw4w9WgXcQ?si=60kpXSDz_EK9HRwN', icon: 'icon2' },
        { name: 'Project 3', description: 'Description 3', url: 'https://youtu.be/dQw4w9WgXcQ?si=60kpXSDz_EK9HRwN', icon: 'icon3' },
    ]);

    const addProjects = (name: string, description: string, url: string, icon: string) => {
        projects.value.push({ name, description, url, icon });
    }
    return { projects }
  })