import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import MentionsLegalesView from '../views/MentionsLegalesView.vue'

import IllustrationCitadelleView from '../views/IllustrationCitadelleView.vue'
import ChartJsView from '../views/ChartJsView.vue'

import NotFoundView from '../views/NotFoundView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/about', name: 'About', component: AboutView },
    { path: '/contact', name: 'Contact', component: ContactView },
    { path: '/mentions-legales', name: 'MentionsLegales', component: MentionsLegalesView },

    { path: '/illustration-citadelle', name: 'IllustrationCitadelle', component: IllustrationCitadelleView },
    { path: '/chartjs', name: 'ChartJs', component: ChartJsView },

    { path: '/404', alias: '/:catchAll(.*)', name: 'NotFound', component: NotFoundView },

  ]
})

export default router



