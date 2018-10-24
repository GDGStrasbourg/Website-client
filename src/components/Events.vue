<template>
  <div>
    <v-container fluid>
      <div class="headline text-xs-center grey--text text--darken-2">
        <v-icon>mdi-calendar</v-icon> Events
      </div>
    </v-container>

    <vue-scheduler
        :time-range="[9, 23]"
        :available-views="['month', 'week', 'day']"
        :initial-date="initial_date"
        initial-view="month"
        :show-today-button="true"
        :use12="false"
        :event-display="eventDisplay"
        :events="events"
        :disable-dialog="true"
        @event-clicked="eventClicked"
    />

    <div class="text-xs-center">
      <div v-for="event in events" :key="event.id">
        <v-dialog v-model="event.view" width="1000">
          <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>
              {{ event.name }}
            </v-card-title>

            <v-card-text>
              <v-layout align-center justify-space-around>
                <span>
                  <v-icon>mdi-calendar-range</v-icon>
                  {{ new Date(event.date) | moment('dddd D MMMM') }}
                </span>

                <span>
                  <v-icon>mdi-clock-outline</v-icon>
                  De {{ event.startTime }} à {{ event.endTime }}
                </span>

                <span>
                  <v-icon>mdi-map-marker</v-icon>
                  {{ event.location.name }} - {{ event.location.address }} - {{ event.location.city }}
                </span>
              </v-layout>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text v-html="event.description"></v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" flat v-bind:href="event.link" target="_blank">
                Evenement Meetup
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '@/services/Api'

export default {
  name: 'events',
  data: () => ({
    events: [],
    initial_date: new Date()
  }),
  methods: {
    eventDisplay (event) {
      return event.name
    },
    eventClicked (event) {
      this.events[event.id].view = true
    }
  },
  async mounted () {
    this.$moment.locale('en')

    try {
      const reqData = await Api().get('meetup/events/upcoming')

      if (reqData === undefined) {
        console.log('error')
      } else {
        this.events = reqData.data.data
      }
    } catch (err) {
      console.log(err)
    }
  }
}
</script>
