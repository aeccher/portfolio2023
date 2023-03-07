<script>
import AboutView from './AboutView.vue';
import WorkView from './WorkView.vue';


export default {
  components: { AboutView, WorkView},
}
</script>

<template>
  <main>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
    <AboutView/>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
    <WorkView/>
</main>
</template>

<style scoped>
</style>