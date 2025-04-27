<template>
    <div class="about">
        <h1>About Me</h1>
        <p>
            Hello! My name is Erik Matschke, and I am a passionate web developer with a love for creating
            beautiful and functional websites. I specialize in front-end development and have experience
            working with modern frameworks like Vue.js and Angular.
        </p>
        <p>
            I am a self-taught programmer who learned coding through online resources and hands-on practice. Over the years, I have built numerous modern websites and honed my skills in web development. Additionally, I have completed several internships in the tech industry, where I gained valuable experience and insights into professional software development.
        </p>
        <h2>Skills</h2>
        <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>Vue.js, Angular</li>
            <li>Node.js</li>
            <li></li>
            <li>Git, GitHub, CI/CD</li>
        </ul>
        <h2>Hobbies</h2>
        <p>
            When I'm not coding, I enjoy biking, Judo, and playing the Organ. I also love
            exploring new technologies and staying up-to-date with the latest trends in web development.
        </p>
        <h2>Contact</h2>
        <p>
            Feel free to reach out to me at <a href="mailto:gawerimax@gmail.com">gawerimax@gmail.com</a>
            or connect with me on <a href="https://www.linkedin.com/in/johndoe" target="_blank">LinkedIn</a>.
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "About",
    props: {
        // Define props if needed
    },
    setup() {
        // Add any setup logic if required
    },
});
</script>

<style scoped>
.about {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

h1,
h2 {
    color: #333;
}

a {
    color: #007bff;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>