<template>
  <div>
    <!-- Team -->
    <div class="headline text-xs-center ma-3 grey--text text--darken-2">
      <v-icon>mdi-account-star</v-icon> Team
    </div>

    <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12 sm6 lg3>
            <v-card color="cyan darken-2" class="white--text">
              <v-layout>
                <v-flex xs5>
                  <v-card-media src="https://cdn.vuetifyjs.com/images/cards/foster.jpg" height="125px" contain></v-card-media>
                </v-flex>

                <v-flex xs7>
                  <div>
                    <div class="headline">Colin CLEARY</div>
                    <div>Président</div>
                    <div>colin.cleary@epitech.eu</div>
                  </div>
                </v-flex>
              </v-layout>

              <v-divider light></v-divider>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6 lg3>
            <v-card color="cyan darken-2" class="white--text">
              <v-layout>
                <v-flex xs5>
                  <v-card-media src="https://cdn.vuetifyjs.com/images/cards/foster.jpg" height="125px" contain></v-card-media>
                </v-flex>

                <v-flex xs7>
                  <div>
                    <div class="headline">Thibaut BURCKEL</div>
                    <div>Vice-président</div>
                    <div>thibaut.burckel@epitech.eu</div>
                  </div>
                </v-flex>
              </v-layout>

              <v-divider light></v-divider>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6 lg3>
            <v-card color="cyan darken-2" class="white--text">
              <v-layout>
                <v-flex xs5>
                  <v-card-media src="https://cdn.vuetifyjs.com/images/cards/foster.jpg" height="125px" contain></v-card-media>
                </v-flex>

                <v-flex xs7>
                  <div>
                    <div class="headline">Brandon WELSCH</div>
                    <div>Trésorier</div>
                    <div>pro@brandon-welsch.eu</div>
                  </div>
                </v-flex>
              </v-layout>

              <v-divider light></v-divider>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6 lg3>
            <v-card color="cyan darken-2" class="white--text">
              <v-layout>
                <v-flex xs5>
                  <v-card-media src="https://cdn.vuetifyjs.com/images/cards/foster.jpg" height="125px" contain></v-card-media>
                </v-flex>

                <v-flex xs7>
                  <div>
                    <div class="headline">Fred HELLE</div>
                    <div>Secrétaire</div>
                    <div>fred.helle@epitech.eu</div>
                  </div>
                </v-flex>
              </v-layout>

              <v-divider light></v-divider>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

    <!-- Social Networks -->
    <div class="headline text-xs-center ma-3 grey--text text--darken-2">
      <v-icon>mdi-account-network</v-icon> Social Networks
    </div>

    <v-container fluid class="pa-0">
      <v-card-text class="text-md-center">
        <v-btn v-for="(social, index) in socials" :key="index" class="mx-3 blue-grey--text" flat icon outline large :href="social.url" target="_blank">
          <v-icon size="30px">{{ social.icon }}</v-icon>
        </v-btn>
      </v-card-text>
    </v-container>

    <!-- Location -->
    <div class="headline text-xs-center ma-3 grey--text text--darken-2">
      <v-icon>mdi-map-marker</v-icon> Location
    </div>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.3774652340485!2d7.748083784831787!3d48.58347103823657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796c85225d13e4b%3A0xe59f4fa201d2d60c!2sEpitech+Strasbourg!5e0!3m2!1sfr!2sfr!4v1521240460165" height="600" frameborder="0" style="border:0; width: 100%;" allowfullscreen=""></iframe>
  </div>
</template>

<script>
export default {
  name: 'contact',
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
