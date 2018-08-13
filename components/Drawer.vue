<template>
  <v-navigation-drawer
    v-model="$store.state.drawer"
    class="secondary"
    absolute
    temporary
  >
    <v-list
      class="secondary"
      dark
    >
      <v-list-tile
        v-for="item in $store.state.nav"
        :key="item.text"
        ripple
        @click="$router.push(item.value)"
      >
        <v-list-tile-content>
          <v-list-tile-title>{{ item.text }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

</script>

<style scoped>

</style>
