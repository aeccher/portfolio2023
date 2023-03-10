<template>
 <h3 class="font-Lato text-center text-3xl font-bold mt-16 lg:mt-32 text-gray-600 underline underline-offset-8 decoration-double p-2">Travaux</h3>
  
  <div class="flex flex-col justify-center align-middle gap-x-12 gap-y-10 lg:flex-row lg:flex-wrap md:gap-x-16">
      <!-- Card - Illustration de la Citadelle -->
      <div class="max-w-sm border border-green-500 rounded-xl dark:bg-gray-800 dark:border-gray-700 m-4">
          <Router-link to="/illustration-citadelle" class="hover:opacity-70 ">
              <img class="rounded-t-lg" src="../assets/images/illustration_citadelle.webp" alt="Illustration de la Citadelle de Besançon" />
          </Router-link>
          <div class="p-5">
              <Router-link to="/illustration-citadelle" class="hover:underline hover:decoration-wavy hover:text-black">
                  <h5 class="mt-4 mb-4 text-2xl font-bold font-Lato tracking-tight text-gray-900 dark:text-white">Illustration de la Citadelle de Besançon</h5>
              </Router-link>
              <p class="mb-3 font-normal text-gray-600 dark:text-gray-400 font-Roboto">Travail de 1ère année (2ème semestre) du cours Production Graphique consistant à réaliser une image vectorielle (en .svg) sur Adobe Illustrator et l'aminer en utilisant du CSS.</p>
              <Router-link to="/illustration-citadelle" class="mt-16 inline-flex items-center px-3 py-2 text-sm font-Roboto font-medium text-center text-white bg-green-500 rounded-xl hover:bg-green-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  En savoir plus
                  <icon-arrow/>
              </Router-link>
          </div>
      </div>
  <!-- Card - ChartJs Accidents de vélo Dataviz -->
  <div class="max-w-sm border border-green-500 rounded-xl dark:bg-gray-800 dark:border-gray-700 m-4">
          <Router-link to="/chartjs" class="hover:opacity-70 ">
              <img class="rounded-t-lg" src="../assets/images/accident_velo.webp" alt="Illustration d'un accident de vélo" />
          </Router-link>
          <div class="p-5">
              <Router-link to="/chartjs" class="hover:underline hover:decoration-wavy hover:text-black">
                  <h5 class="mb-2 text-2xl font-bold font-Lato tracking-tight text-gray-900 dark:text-white">Datavisualisation / Accidentologie en vélo - ChartJs</h5>
              </Router-link>
              <p class="mb-2 font-normal text-gray-600 dark:text-gray-400 font-Roboto">Travail de 2ème année (3ème semestre) du cours Création et Design Interactif (UI) consistant à réaliser une page web avec des graphiques en utilisant ChartJs pour répondre aux problématiques de l'accidentologie en vélo.</p>
              <Router-link to="/chartjs" class="mt-2 inline-flex items-center px-3 py-2 text-sm font-Roboto font-medium text-center text-white bg-green-500 rounded-xl hover:bg-green-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  En savoir plus
                  <icon-arrow/>
              </Router-link>
          </div>
      </div>
      <!-- Card - ThreeJs Balancier Lego -->
      <div class="max-w-sm border border-green-500 rounded-xl dark:bg-gray-800 dark:border-gray-700 m-4">
              <Router-link to="/threejs" class="hover:opacity-70 ">
                  <img class="rounded-t-lg" src="../assets/images/balancier_lego.webp" alt="Image d'un balancier avec ThreeJs"/>
              </Router-link>
              <div class="p-5">
                  <Router-link to="/threejs" class="hover:underline hover:decoration-wavy hover:text-black">
                      <h5 class="mt-9 mb-5 text-2xl font-bold font-Lato tracking-tight text-gray-900 dark:text-white">Balancier avec ThreeJs</h5>
                  </Router-link>
                  <p class="mb-16 font-normal text-gray-600 dark:text-gray-400 font-Roboto">Travail de 2ème année (4ème semestre) du cours Développement Front consistant à réaliser un balancier en WebGL avec ThreeJs.</p>
                  <Router-link to="/threejs" class="mt-16 inline-flex items-center px-3 py-2 text-sm font-Roboto font-medium text-center text-white bg-green-500 rounded-xl hover:bg-green-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      En savoir plus
                      <icon-arrow/>
                  </Router-link>
              </div>
          </div>
      <!-- Card - Affiche expo universelle et carte postale-->
      <div class="max-w-sm border border-green-500 rounded-xl dark:bg-gray-800 dark:border-gray-700 m-4">
              <Router-link to="/exposition-universelle" class="hover:opacity-70 ">
                  <img class="rounded-t-lg" src="../assets/images/expo_univ.webp" alt="Affiche exposition univirselle Osaka" />
              </Router-link>
              <div class="p-5">
                  <Router-link to="/exposition-universelle" class="hover:underline hover:decoration-wavy hover:text-black">
                      <h5 class="mb-3 text-2xl font-bold font-Lato tracking-tight text-gray-900 dark:text-white">Affiche et carte postale pour l'Exposition Universelle d'Osaka 2025</h5>
                  </Router-link>
                  <p class="mb-3 font-normal text-gray-600 dark:text-gray-400 font-Roboto">Travail de 2ème année (3ème semestre) du cours Culture Artistique consistant à réaliser une affiche et une carte postale pour l'Exposition Universelle d'Osaka 2025.</p>
                  <Router-link to="/exposition-universelle" class="inline-flex items-center px-3 py-2 text-sm font-Roboto font-medium text-center text-white bg-green-500 rounded-xl hover:bg-green-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      En savoir plus
                      <icon-arrow/>
                  </Router-link>
              </div>
          </div>
      <!-- Card - Carte postale à la manière de cassandre -->
      <div class="max-w-sm border border-green-500 rounded-xl dark:bg-gray-800 dark:border-gray-700 m-4">
              <Router-link to="/cassandre" class="hover:opacity-70 ">
                  <img class="rounded-t-lg" src="../assets/images/cassandre.webp" alt="Illustration d'un cycliste devant son vélo buvant de l'eau" />
              </Router-link>
              <div class="p-5">
                  <Router-link to="/cassandre" class="hover:underline hover:decoration-wavy hover:text-black">
                      <h5 class="mb-4 text-2xl font-bold font-Lato tracking-tight text-gray-900 dark:text-white">Carte postale à la manière de l'artiste Cassandre</h5>
                  </Router-link>
                  <p class="mb-4 font-normal text-gray-600 dark:text-gray-400 font-Roboto">Travail de 2ème année (3ème semestre) du cours Culture Artistique consistant à réaliser une carte postale à la manière de l'artiste Cassandre.</p>
                  <Router-link to="/cassandre" class="mt-2 inline-flex items-center px-3 py-2 text-sm font-Roboto font-medium text-center text-white bg-green-500 rounded-xl hover:bg-green-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      En savoir plus
                      <icon-arrow/>
                  </Router-link>
              </div>
          </div>
      <!-- Card - Jeu Hypercube -->
      <div class="max-w-sm border border-green-500 rounded-xl dark:bg-gray-800 dark:border-gray-700 m-4">
              <Router-link to="/hypercube" class="hover:opacity-70 ">
                  <img class="rounded-t-lg" src="../assets/images/hypercube.webp" alt="plateau du jeu Hypercube" />
              </Router-link>
              <div class="p-5">
                  <Router-link to="/hypercube" class="hover:underline hover:decoration-wavy hover:text-black">
                      <h5 class="mb-4 text-2xl font-bold font-Lato tracking-tight text-gray-900 dark:text-white">Scientific Game Jam - Hypercube</h5>
                  </Router-link>
                  <p class="mb-3 font-normal text-gray-600 dark:text-gray-400 font-Roboto">Participation à la Scientific Game Jam de l'unversité du 25 au 27 nov. 2022.</p>
                  <Router-link to="/hypercube" class="mt-10 inline-flex items-center px-3 py-2 text-sm font-Roboto font-medium text-center text-white bg-green-500 rounded-xl hover:bg-green-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      En savoir plus
                      <icon-arrow/>
                  </Router-link>
              </div>
          </div>
       <!-- Card - Blender -->
       <div class="max-w-sm border border-green-500 rounded-xl dark:bg-gray-800 dark:border-gray-700 m-4">
          <Router-link to="/blender" class="hover:opacity-70 ">
                              <img class="rounded-t-lg" src="../assets/images/blender.webp" alt="Clé modélisée en 3D" />
                          </Router-link>
                          <div class="p-5">
                              <Router-link to="/blender" class="hover:underline hover:decoration-wavy hover:text-black">
                                  <h5 class="my-12 text-2xl font-bold font-Lato tracking-tight text-gray-900 dark:text-white">Modélisation d'une clé - Blender</h5>
                              </Router-link>
                              <p class="mb-3 font-normal text-gray-600 dark:text-gray-400 font-Roboto">Travail de 2ème année (4ème semestre) du cours Design d'Expérience consistant à réaliser un objet en lien avec notre jeu vidéo créé pour le cours de Développement.</p>
                              <Router-link to="/blender" class="mt-16 inline-flex items-center px-3 py-2 text-sm font-Roboto font-medium text-center text-white bg-green-500 rounded-xl hover:bg-green-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                  En savoir plus
                                  <icon-arrow/>
                              </Router-link>
                          </div>
       </div>
       <!-- Card - SAÉ 202 -->
       <div class="max-w-sm border border-green-500 rounded-xl dark:bg-gray-800 dark:border-gray-700 m-4">
          <Router-link to="/ecobiking" class="hover:opacity-70 ">
                              <img class="rounded-t-lg" src="../assets/images/sae202.webp" alt="Site ecobiking" />
                          </Router-link>
                          <div class="p-5">
                              <Router-link to="/ecobiking" class="hover:underline hover:decoration-wavy hover:text-black">
                                  <h5 class="mb-2 text-2xl font-bold font-Lato tracking-tight text-gray-900 dark:text-white"> ECOBIKING - SAÉ 202 (Situation d'Apprentissage et d'Évaluation) </h5>
                              </Router-link>
                              <p class="mb-3 font-normal text-gray-600 dark:text-gray-400 font-Roboto">Travail de 1ère année (2ème semestre) réalisé pour un examen consistant à concevoir un site bilingue (anglais/français) et sa promotion par groupe de 3 sur la thématique du velotaf. </p>
                              <Router-link to="/ecobiking" class="mt-8 inline-flex items-center px-3 py-2 text-sm font-Roboto font-medium text-center text-white bg-green-500 rounded-xl hover:bg-green-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                  En savoir plus
                                  <icon-arrow/>
                              </Router-link>
                          </div>
            </div>
       <!-- Card - Jenfi -->
       <div class="max-w-sm border border-green-500 rounded-xl dark:bg-gray-800 dark:border-gray-700 m-4">
          <Router-link to="/jenfi" class="hover:opacity-70 ">
                              <img class="rounded-t-lg" src="../assets/images/jenfi_page_accueil.webp" alt="Maquette du site Jenfi" />
                          </Router-link>
                          <div class="p-5">
                              <Router-link to="/jenfi" class="hover:underline hover:decoration-wavy hover:text-black">
                                  <h5 class="mb-4 text-2xl font-bold font-Lato tracking-tight text-gray-900 dark:text-white"> JENFI - Projet configurateur (prototype)</h5>
                              </Router-link>
                              <p class="mb-5 font-normal text-gray-600 dark:text-gray-400 font-Roboto">Travail de 2ème année (3ème semestre) du cours Design d'Expérience consistant à réaliser un site qui permet de configurer/personnaliser une chaussure.  </p>
                              <Router-link to="/jenfi" class="mt-8 inline-flex items-center px-3 py-2 text-sm font-Roboto font-medium text-center text-white bg-green-500 rounded-xl hover:bg-green-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                  En savoir plus
                                  <icon-arrow/>
                              </Router-link>
                          </div>
            </div>
 
 
  </div>
</template>

<script>
import IconArrow from "../components/icons/IconArrow.vue";

export default {
  components: { IconArrow },
}
</script>