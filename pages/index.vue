<template>
  <div>
    <v-jumbotron
      :gradient="gradient"
      dark
      src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
      height="80vh"
    >
      <v-container fill-height pa-5>
        <v-layout align-center>
          <v-flex>
            <h3 class="display-3">ASU Esports</h3>

            <span class="subheading">We are the largest esports club at ASU, fielding teams for several games and fostering a community of fans and gamers.</span>

            <v-divider class="my-3"></v-divider>

            <div class="title mb-3">Join our Discord!</div>
            <iframe class="discord" src="https://discordapp.com/widget?id=198240842626891776&theme=dark" allowtransparency="true" frameborder="0" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
  </div>
</template>

<script>
export default {
  components: {
  },
  data: () => ({
    gradient: 'to top right, rgba(130,32,64, .7), rgba(94,24,47, .7)'
  })
}
</script>

<style>
.discord {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3em;
  width: 75vw;
  height: 40vh;
}
</style>
