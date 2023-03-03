<script>
import AboutView from './AboutView.vue';
import WorkView from './WorkView.vue';
import ContactView from './ContactView.vue';



export default {
  components: { AboutView, WorkView, ContactView},
}
</script>

<template>
  <main>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
    <about-view/>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
    <WorkView/>
</main>
</template>

<style scoped>
</style>