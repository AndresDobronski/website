<template>
  <v-app>
    <navbar />
    <nuxt />
    <footer-component />
  </v-app>
</template>

<script>
  import Navbar from '~/components/Navbar.vue'
  import FooterComponent from '~/components/FooterComponent.vue'

  export default {
    components: {
      Navbar,
      FooterComponent
    },
  }
</script>
