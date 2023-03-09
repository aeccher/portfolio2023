<script>
import Typed from 'typed.js';

export default {
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
</template>
