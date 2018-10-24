<template>
  <v-toolbar class="white">
    <router-link to="/">
      <img src="@/assets/logo.png">
    </router-link>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat :to="{ name: 'home' }" exact>Home</v-btn>
      <v-btn flat :to="{ name: 'blog' }" exact>Blog</v-btn>
      <v-btn flat :to="{ name: 'events' }" exact>Events</v-btn>
      <v-btn flat :to="{ name: 'contact' }" exact>Contact</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'default-layout-header'
}
</script>
