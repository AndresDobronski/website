<template>
  <div>
    <v-jumbotron
      :gradient="gradient"
      height="100vh"
      dark
    >
      <v-container
        fill-height
        pa-5
      >
        <v-layout align-center>
          <v-flex>
            <h3 class="display-3">
              ASU Esports
            </h3>

            <span class="subheading">
              We are the largest esports club at ASU, fielding teams for several games and fostering a community of fans and gamers.
            </span>

            <v-divider class="my-3" />

            <span class="title">
              Join our Discord!
            </span>
            <iframe
              class="discord"
              src="https://discordapp.com/widget?id=198240842626891776&theme=dark"
              allowtransparency="true"
              frameborder="0" 
            />
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
  </div>
</template>

<script>
  export default {
    data: () => ({
      gradient: 'to top right, rgba(130,32,64, .8), rgba(94,24,47, 1)'
    })
  }
</script>

<style>
  .discord {
    margin-top: 2em;
    width: 75vw;
    height: 40vh;
  }
</style>
