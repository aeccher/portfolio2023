<template>
  <!-- Header -->
  <header class="flex bg-green-500">
    <nav>
      <router-link to="/" class="flex items-center">
        <icon-logo class="ml-2" />
        <span class="text-lg font-thin text-white">Agathe ECCHER</span>
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
        <div v-else>
          <icon-cross/>
        </div>
      </div>
    </button>



      <div
        id="menu"
        class="fixed inset-0 z-40 translate-x-full bg-green-500 motion-safe:transition-transform motion-safe:duration-1000"
        :class="{ 'translate-x-0': menuOuvert }">
        <ul class="p-10 text-base text-white">
          <li>
            <Router-link to="/about" @click="menuOuvert = false">À propros de moi</Router-link>
          </li>
          <li>
            <Router-link to="/about" @click="menuOuvert = false" >Travail</Router-link>
          </li>
          <li>
            <Router-link to="/contact" @click="menuOuvert = false" >Contact</Router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="hidden flex-auto justify-end text-lg text-white gap-24 pb-4 pt-6 pr-16 md:flex">
      <p><Router-link to="/about" >À propros de moi</Router-link></p>
      <p><Router-link to="/about" >Travail</Router-link></p>
      <p><Router-link to="/contact" class="px-12 py-3 mt-8 font-medium border border-white rounded-full hover:bg-white hover:text-green-500">Contact</Router-link></p>
    </div>
  </header>

  <router-view />
  <!-- Fin Header --> 

  <!-- Footer -->
  <footer class="pt-36">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 ">
      <div class="pt-4 border-t border-gray-300 sm:flex sm:items-center sm:justify-between">

        <nav aria-label="Footer Navigation">
          <ul class="flex flex-wrap justify-center gap-4 text-base text-gray-500 lg:justify-end">
            <li>
              <p><Router-link to="/about" class="hover:underline mr-6">Qui suis-je ?</Router-link></p>
            </li>
            <li>
              <p><Router-link to="/contact" class="hover:underline mr-6">Contact</Router-link></p>
            </li>
            <li>
              <p><Router-link to="/about" class="hover:underline mr-6">Mentions légales</Router-link></p>
            </li>
          </ul>
        </nav>
        
        <p class="text-base text-center text-gray-400 mt-4">
          Portfolio 2023 - Agathe ECCHER 
        </p>
        
        <a href="https://www.linkedin.com/in/agathe-eccher" type="button" class="flex justify-center gap-6 mt-4 sm:mt-0 lg:justify-end">
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
