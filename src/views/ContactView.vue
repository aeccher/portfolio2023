<template>
    <section class="text-gray-600 body-font relative mt-12">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contactez-moi</h1>
      <p class="lg:w-2/3 mx-auto text-base">Écrivez votre message ci-dessous, j'y répondrai dans les plus brefs délais.</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
     <!--<form class="flex flex-wrap -m-2" action="https://formsubmit.co/agatheec@free.fr" method="POST">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-xs text-gray-600">Prénom & Nom</label>
            <input type="text" id="name" name="name" placeholder="Prénom NOM" required class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-xs text-gray-600">Email</label>
            <input type="email" id="email" name="email" placeholder="prenom.nom@exemple.com" required class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
        </div>
        <input type="hidden" name="_template" value="table">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="http://localhost:3000/contact">
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" placeholder="Écrivez votre message ici..." required class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"  type="submit">Envoyer</button>
        </div>

      </form>-->
      <form class="flex flex-wrap -m-2" @submit.prevent="sendEmail">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-xs text-gray-600">Prénom & Nom</label>
            <input v-model="form.name" type="text" id="name" name="name" placeholder="Prénom NOM" required class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-xs text-gray-600">Email</label>
            <input v-model="form.email" type="email" id="email" name="email" placeholder="prenom.nom@exemple.com" required class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
            <textarea  v-model="form.message" id="message" name="message" placeholder="Écrivez votre message ici..." required class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"  type="submit">Envoyer</button>
        </div>

      </form>
      
    </div>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    async sendEmail() {
      try {
        const response = await fetch('/sendemail.php', {
          method: 'POST',
          body: JSON.stringify(this.form),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>

