<template>
  <v-toolbar
    color="secondary"
    dark
  >
    <v-toolbar-side-icon class="hidden-md-and-up" />
    <v-toolbar-title>
      <a href="/">
        <img src="/logo.png" />
        <span>
          ASU Esports
        </span>
      </a>
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>
        About
      </v-btn>
      <v-btn flat>
        Achievements
      </v-btn>
      <v-btn flat>
        Teams
      </v-btn>
      <v-btn flat>
        Staff
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<style scoped>
  img {
    display: inline-block;
    vertical-align: middle;
    height: 44px;
    width: 44px;
  }
  a {
    text-decoration: none;
  }
  span {
    vertical-align: middle;
    padding-left: 5px;
    color: white;
    font-weight: 400;
  }
</style>
