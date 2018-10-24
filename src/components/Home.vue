<template>
  <v-content>
    <section>
      <v-parallax :src="require('@/assets/top.jpg')" height="600">
        <v-layout column align-center justify-center class="white--text">
          <img src="@/assets/logo_alt.png" alt="Google Dev Group Strasbourg" height="255">

          <div class="subheading text-md-center mb-3 mt-5">
            Le GDG Strasbourg est un groupe d'échange et de partage autour du développement informatique à Strasbourg.
            <br>
            Nous discutons à propos des technologies qui gravitent autour de Google mais pas que ;)
            <br>
            Venez nous rejoindre, assister aux sessions, et proposer vos interventions !
          </div>
        </v-layout>
      </v-parallax>
    </section>

    <section class="blue-grey lighten-2">
      <v-layout column wrap pa-5 align-center>
        <v-flex xs12 pa-2 sm4>
          <div class="text-xs-center">
            <h1 class="headline mb-2">Rejoignez une communauté grandissante !</h1>

            <span class="subheading text-md-center">
              GDG Strasbourg compte déjà <!-- {{ members_count }} --> 40 membres sur Meetup<br>

              <v-btn color="info" class="mt-4" dark large href="https://www.meetup.com/fr-FR/GDG-Strasbourg/" target="_blank">
                Je m'inscris
              </v-btn>
            </span>
          </div>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax :src="require('@/assets/bottom.png')" height="380">
        <v-layout column align-center justify-center>
          <div class="headline black--text mb-3 text-xs-center">Retrouvez bientôt nos prochains événements</div>
        </v-layout>
      </v-parallax>
    </section>
  </v-content>
</template>

<script>
import Api from '@/services/Api'

export default {
  name: 'home',
  data: () => ({
    members_count: 0
  }),
  async mounted () {
    try {
      const reqData = await Api().get('meetup/group/members_count')

      if (reqData === undefined) {
        console.log('error')
      } else {
        this.members_count = reqData.data.data
      }
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
