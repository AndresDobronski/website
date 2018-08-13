<template>
  <v-app>
    <navbar />
    <drawer />
    <sidebar />
    <nuxt />
    <footer-component />
  </v-app>
</template>

<script>
  import Navbar from '~/components/Navbar.vue'
  import Drawer from '~/components/Drawer.vue'
  import Sidebar from '~/components/Sidebar.vue'
  import FooterComponent from '~/components/FooterComponent.vue'

  export default {
    components: {
      Navbar,
      Drawer,
      Sidebar,
      FooterComponent
    },
  }
</script>
