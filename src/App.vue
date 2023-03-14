<template>
  <!-- Header -->
  <header class="flex bg-green-500 fixed top-0 w-full z-10">
    <nav class="flex items-center">
      <router-link to="/" class="flex items-center">
        <icon-logo class="ml-4" />
        <h1 class="text-lg font-thin text-white font-Roboto hover:underline hover:text-gray-100 ">Ag@the ECCHER</h1>
        <span class="sr-only">Logo retour Accueil</span>
      </router-link>
    </nav> 

    <nav class="ml-auto flex items-center">
      <button
        class="relative z-50 text-xl hidden"
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
        :class="{ 'translate-x-0': menuOuvert }"
        :style="{ 'transition-delay': 5 }">
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

    <!-- Menu format Desktop -->
    <div class="hidden flex-auto justify-end items-center text-lg text-white gap-24 pb-4 pt-6 pr-16 md:flex">
      <Router-link to="/about" class="font-Roboto hover:underline hover:text-gray-100">À propos de moi</Router-link>
      <Router-link to="/travail" class="font-Roboto hover:underline hover:text-gray-100">Travail</Router-link>
      <Router-link to="/contact" class="px-12 py-3 font-Roboto border border-white rounded-full hover:bg-white hover:text-green-500">Contact</Router-link>
    </div>

    <!-- Menu format Téléphone -->
    <nav>
      <div class="visible flex justify-evenly items-center z-20 md:hidden">
      <Router-link to="/about"><IconAbout/><span class="sr-only">Icône À propos de moi page /about</span></Router-link>
      <Router-link to="/travail"><IconWork/><span class="sr-only">Icône du lieu de travail : thé posé sur un bureau à côté d'un ordinateur page /travail</span></Router-link>
      <Router-link to="/contact"><IconContact/><span class="sr-only">Icône de contact</span></Router-link>
    </div>
    
    </nav>

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
              <Router-link to="/about" class="hover:underline mr-6 font-Roboto hover:text-green-500">Qui suis-je ?</Router-link>
            </li>
            <li>
              <Router-link to="/contact" class="hover:underline mr-6 font-Roboto hover:text-green-500">Contact</Router-link>
            </li>
            <li>
              <Router-link to="/mentions-legales" class="hover:underline mr-6 font-Roboto hover:text-green-500">Mentions légales</Router-link>
            </li>
          </ul>
        </nav>

        <div class="text-base text-center font-Roboto mt-3 lg:mt-0 lg:flex mx-auto justify-center">
        <p class="text-gray-400 lg:mr-14">
          Portfolio 2023 - Agathe ECCHER [ekɛʀ]  
        </p>

        <a href="https://agathe-eccher.fr/MMI/" target="_blank" class=" text-green-500  hover:underline hover:text-green-600">
        Projets de mes semestres en MMI </a>
        </div>
        
        <div class="flex justify-center items-center mt-3 lg:justify-end lg:mr-10 lg:mt-0">
          <a href="https://www.instagram.com/agatheccher/" target="_blank" type="button" class="mr-4">
          <span class="sr-only">Instagram</span>
          <IconInsta />
        </a>

        <a href="https://www.linkedin.com/in/agathe-eccher" target="_blank" type="button" class="">
          <span class="sr-only">LinkedIn</span>
          <icon-linked-in />
        </a>   
        </div>
    </div>
  </div>
</footer>
<!-- fin du Footer -->

</template>

<script>
import IconLogo from "./components/icons/IconLogo.vue";

import IconMenu from "./components/icons/IconMenu.vue";
import IconCross from "./components/icons/IconCross.vue";

import IconLinkedIn from "./components/icons/IconLinkedIn.vue";
import IconInsta from "./components/icons/IconInsta.vue";

import IconAbout from "./components/icons/IconAbout.vue";
import IconWork from "./components/icons/IconWork.vue";
import IconContact from "./components/icons/IconContact.vue";

export default {
  name: "App",
  data() {
    return {
      menuOuvert: false,
    };
  },
  components: { IconLogo, IconMenu, IconCross, IconLinkedIn, IconInsta, IconAbout, IconWork, IconContact },
};

</script>

