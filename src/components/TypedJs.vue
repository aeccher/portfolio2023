<script>
import Typed from 'typed.js';
import IconChevronsDown from "../components/icons/IconChevronsDown.vue";


export default {
  components: { IconChevronsDown },
  mounted() {
        const options = {
        strings: ['Bonjour,', 'Hello...', '¡Holà!'],
        typeSpeed: 200,
        loop: true,
        showCursor: "false",
        }
    const typed = new Typed('#typed', options)
        }
    }
</script>

<template >
  <div class="py-52">
  <div id="typed" class="md:ml-16 text-8xl pb-10 align-text-center text-center font-Roboto text-green-500"></div>
  <IconChevronsDown class="m-auto"/>
  </div>
</template>

