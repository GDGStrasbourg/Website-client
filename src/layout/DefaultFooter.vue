<template>
  <v-footer dark height="auto">
    <v-card flat tile class="grey darken-1 white--text text-xs-center" style="width:100%;">
      <v-card-text>
        <v-btn v-for="(social, index) in socials" :key="index" class="mx-3 white--text" icon :href="social.url" target="_blank">
          <v-icon size="24px">{{ social.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        <a class="white--text" href="/contact">Contactez-nous</a>
      </v-card-text>

      <v-card-text class="white--text grey darken-2">
        <div class="white--text ml-3">
          Made with
          <v-icon class="red--text">favorite</v-icon>
          by <a class="white--text" href="https://www.brandon-welsch.eu/" target="_blank">Brandon Welsch</a>
          and <a class="white--text" href="https://vuetifyjs.com/">Vuetify</a>
        </div>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'default-layout-footer',
  data: () => ({
    socials: [
      {
        icon: 'fab fa-facebook',
        url: 'https://www.facebook.com/GDGStrasbourg67/'
      },
      {
        icon: 'fab fa-twitter',
        url: 'https://twitter.com/StrasbourgGdg/'
      },
      {
        icon: 'fab fa-meetup',
        url: 'https://www.meetup.com/fr-FR/GDG-Strasbourg/'
      },
      {
        icon: 'fab fa-facebook-messenger',
        url: 'https://m.me/GDGStrasbourg67/'
      }
    ]
  })
}
</script>
