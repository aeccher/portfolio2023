<script>
import AboutView from './AboutView.vue';
import WorkView from './WorkView.vue';
import Typed from 'typed.js';


export default {
  components: { AboutView, WorkView},
  mounted() {
        const options = {
        strings: ['Bonjour...', 'Hello...', '¡Holà!'],
        typeSpeed: 200,
        loop: true,
        }
    const typed = new Typed('#typed', options)
        }
    }
</script>

<template>
  <div id="typed" class="text-center lg:text-left lg:ml-16 lg:text-8xl pt-6 pb-4 text-4xl font-Roboto text-green-500"></div>
  <hr class="h-px mb-8 bg-gray-200 border-0 dark:bg-gray-700">
  <main>
    <AboutView/>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
    <WorkView/>
</main>
</template>

<style scoped>
</style>