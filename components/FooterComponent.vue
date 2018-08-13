<template>
  <v-footer
    height="auto"
    dark
  >
    <v-layout
      row
      wrap
    >
      <v-flex
        secondary
        xs12
        text-xs-center
        style="margin-bottom:-11px"
      >
        <v-btn
          v-for="item in $store.state.social"
          :key="item.icon"
          :href="item.value"
          class="mx-4"
          target="_"
          icon
        >
          <v-icon size="22px">{{ item.icon }}</v-icon>
        </v-btn>
      </v-flex>
      <v-flex
        secondary
        text-xs-center
        xs12
        white--text
        py-2
      >
        <span>&copy;2018 — </span>
        <strong>ASU Esports Association</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>

</script>

<style scoped>

</style>
