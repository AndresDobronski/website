<template>
  <div>
    <v-jumbotron
      :gradient="gradient"
      height="100vh"
      dark
    >
      <v-container
        fill-height
      >
        <v-layout
          align-content-center
          wrap
        >
          <v-flex xs12>
            <h3 class="text-xs-center display-3">ASU Esports</h3>
            <p class="text-xs-center subheading">
              We are the largest esports club at ASU, fielding teams for several games and fostering a community of fans and gamers.
            </p>
            <v-divider class="my-3" />
          </v-flex>
          <v-flex xs12>
            <p class="text-xs-center title">Join our Discord!</p>
          </v-flex>
          <v-flex xs12>
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
    gradient: 'to top right, rgba(255, 198, 39, 0.5), rgba(94, 24, 47, 1)'
  })
}
</script>

<style scoped>
.discord {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  width: 75vw;
  height: 40vh;
  min-width: 325px;
  min-height: 325px;
}
</style>
