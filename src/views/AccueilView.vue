<script>
import IconArrow from "../components/icons/IconArrow.vue";
import AboutView from './AboutView.vue';

export default {
  components: { IconArrow, AboutView },
}
</script>

<template>
  <main>
    <about-view/>
    <h3 class="font-script text-center text-3xl font-bold mt-8 text-gray-600 underline underline-offset-8 decoration-double p-2">Travaux</h3>
    <!-- Card - Illustration de la Citadelle -->
    <div class="flex justify-center m-4">
        <div class="max-w-sm border border-green-500 rounded-lg dark:bg-gray-800 dark:border-gray-700 m-4">
            <Router-link to="/illustration-citadelle" class="hover:opacity-70 ">
                <img class="rounded-t-lg" src="../assets/images/illustration_citadelle.svg" alt="Illustration de la Citadelle de Besançon" />
            </Router-link>
            <div class="p-5">
                <Router-link to="/illustration-citadelle" class="hover:underline decoration-wavy">
                    <h5 class="mb-2 text-2xl font-bold font-script tracking-tight text-gray-900 dark:text-white">Illustration de la Citadelle de Besançon</h5>
                </Router-link>
                <p class="mb-3 font-normal text-gray-600 dark:text-gray-400 font-roboto">Travail de 1ère année (2ème semestre) du cours Production Graphique consistant à réaliser une image vectorielle (en .svg) sur Adobe Illustrator et l'aminer en utilisant du CSS."</p>
                <Router-link to="/illustration-citadelle" class="inline-flex items-center px-3 py-2 text-sm font-roboto font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    En savoir plus
                    <icon-arrow/>
                </Router-link>
            </div>
        </div>
    <!-- Card - ChartJs Accidents de vélo Dataviz -->
    <div class="max-w-sm border border-green-500 rounded-lg dark:bg-gray-800 dark:border-gray-700 m-4">
            <Router-link to="/chartjs" class="hover:opacity-70 ">
                <img class="rounded-t-lg" src="../assets/images/accident_velo.png" alt="Illustration d'un accident de vélo" />
            </Router-link>
            <div class="p-5">
                <Router-link to="/chartjs" class="hover:underline decoration-wavy">
                    <h5 class="mb-2 text-2xl font-bold font-script tracking-tight text-gray-900 dark:text-white">Datavisualisation Accidentologie en vélo - ChartJs</h5>
                </Router-link>
                <p class="mb-3 font-normal text-gray-600 dark:text-gray-400 font-roboto">Travail de 2ème année (3ème semestre) du cours Création et Design Interactif (UI) consistant à réaliser une page web avec des graphiques en utilisant ChartJs pour répondre aux problématiques de l'accidentologie en vélo."</p>
                <Router-link to="/chartjs" class="inline-flex items-center px-3 py-2 text-sm font-roboto font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    En savoir plus
                    <icon-arrow/>
                </Router-link>
            </div>
        </div>

    </div>


</main>
</template>

<style scoped>
</style>