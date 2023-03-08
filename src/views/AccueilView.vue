<script>
import AboutView from './AboutView.vue';
import WorkView from './WorkView.vue';
import Typed from 'typed.js';


export default {
  components: { AboutView, WorkView},
  mounted() {
        const options = {
        strings: ['Bonjour', 'Hello', '¡Holà!'],
        typeSpeed: 100,
        startDelay: 5,
        loop: true,
        }
    const typed = new Typed('#typed', options)
        }
    }
</script>

<template>
  <main>
    <p id="typed" class="text-center lg:text-left lg:ml-16 lg:text-4xl pt-6 text-2xl font-Roboto text-green-500"></p>
    <hr class="h-px mb-8 bg-gray-200 border-0 dark:bg-gray-700">
    <AboutView/>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
    <WorkView/>
</main>
</template>

<style scoped>
</style>