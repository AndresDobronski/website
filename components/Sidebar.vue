<template>
  <v-card class="elevation-8 hidden-sm-and-down">
    <v-card-actions>
      <v-list>
        <v-list-tile
          v-for="item in $store.state.social"
          :key="item.icon"
        >
          <v-list-tile-content>
            <v-btn
              :href="item.value"
              icon
              target="_"
            >
              <v-icon size="24px">{{ item.icon }}</v-icon>
            </v-btn>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card-actions>
  </v-card>
</template>

<script>

</script>

<style scoped>
.v-card {
  z-index: 1;
  position: fixed;
  margin-top: 30vh;
}
.v-list {
  margin-top: -8px;
  margin-bottom: -8px;
  margin-right: -7px;
  margin-left: -7px;
  background-color: #EAEAE8;
}
</style>
