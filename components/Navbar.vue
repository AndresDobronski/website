<template>
  <v-toolbar
    color="secondary"
    app
    dark
    dense
  >
    <v-toolbar-side-icon
      class="hidden-md-and-up"
      @click="$store.commit('setDrawer', !$store.state.drawer)"
    />
    <v-toolbar-title>
      <a href="/">
        <img src="/logo.png">
        <span>ASU Esports</span>
      </a>
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        v-for="item in $store.state.nav"
        :key="item.text"
        flat
      >
        {{ item.text }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

</script>

<style scoped>
img {
  display: inline-block;
  vertical-align: middle;
  height: 40px;
}
a {
  text-decoration: none;
}
span {
  vertical-align: middle;
  padding-left: 12px;
  color: white;
  font-weight: 400;
}
</style>
