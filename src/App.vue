<template>
  <!-- Header -->
  <header class="flex bg-green-500">
    <nav class="flex items-center">
      <router-link to="/" class="flex items-center">
        <icon-logo class="ml-4" />
        <h1 class="text-lg font-thin text-white font-Roboto">Ag@the ECCHER</h1>
        <span class="sr-only">Logo retour Accueil</span>
      </router-link>
    </nav> 

    <nav class="ml-auto flex items-center">
      <button
        class="relative z-50 text-xl md:hidden"
        aria-haspopup="true"
        aria-controls="menu"
        :aria-expanded="menuOuvert"
        @click="menuOuvert = !menuOuvert"
      >
      <div>
        <div v-if="!menuOuvert">
          <icon-menu/>
        </div>
        <div class="fixed top-2 right-0" v-else>
          <icon-cross/>
        </div>
      </div>
    </button>



      <div
        id="menu"
        class="fixed overflow-y-hidden inset-0 z-40 translate-x-full bg-green-500 motion-safe:transition-transform motion-safe:duration-1000"
        :class="{ 'translate-x-0': menuOuvert }">
        <ul class="p-10 text-3xl font-bold font-Roboto text-white grid gap-8 place-content-center mt-24">
          <li>
            <Router-link to="/about" @click="menuOuvert = false" >À propos de moi</Router-link>
          </li>
          <li>
            <Router-link to="/travail" @click="menuOuvert = false" >Travail</Router-link>
          </li>
          <li>
            <Router-link to="/contact" @click="menuOuvert = false" >Contact</Router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="hidden flex-auto justify-end items-center text-lg text-white gap-24 pb-4 pt-6 pr-16 md:flex">
      <Router-link to="/about" class="font-Roboto hover:underline">À propos de moi</Router-link>
      <Router-link to="/travail" class="font-Roboto hover:underline">Travail</Router-link>
      <Router-link to="/contact" class="px-12 py-3 font-medium border border-white rounded-full hover:bg-white hover:text-green-500 font-Roboto">Contact</Router-link>
    </div>
  </header>

  <router-view />
  <!-- Fin Header --> 

  <!-- Footer -->
  <footer class="mt-8">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 ">
      <div class="pt-4 pb-4 border-t border-gray-300 sm:flex sm:items-center sm:justify-between">

        <nav aria-label="Footer Navigation">
          <ul class="flex flex-wrap justify-center gap-4 text-base text-gray-500 lg:justify-end">
            <li>
              <Router-link to="/about" class="hover:underline mr-6 font-Roboto">Qui suis-je ?</Router-link>
            </li>
            <li>
              <Router-link to="/contact" class="hover:underline mr-6 font-Roboto">Contact</Router-link>
            </li>
            <li>
              <Router-link to="/mentions-legales" class="hover:underline mr-6 font-Roboto">Mentions légales</Router-link>
            </li>
          </ul>
        </nav>

        <div class="text-base text-centermt-4 font-Roboto mt-4 lg:flex ml-10">
        <p class="text-gray-400 lg:mr-14">
          Portfolio 2023 - Agathe ECCHER [ekɛʀ]  
        </p>

        <a href="https://agathe-eccher.fr/MMI/" target="_blank" class=" text-green-500  hover:underline">
        Projets de mes semestres en MMI </a>
        </div>
        
        
        <a href="https://www.linkedin.com/in/agathe-eccher" target="_blank" type="button" class="flex justify-center gap-6 lg:pr-16 mt-4 sm:mt-0 lg:justify-end">
          <span class="sr-only">LinkedIn</span>
          <icon-linked-in />
        </a>
   
    </div>
  </div>
</footer>


</template>

<script>
import IconLogo from "./components/icons/IconLogo.vue";
import IconMenu from "./components/icons/IconMenu.vue";
import IconCross from "./components/icons/IconCross.vue";
import IconLinkedIn from "./components/icons/IconLinkedIn.vue";

export default {
  name: "App",
  data() {
    return {
      menuOuvert: false,
    };
  },
  components: { IconLogo, IconMenu, IconCross, IconLinkedIn },
};

</script>

