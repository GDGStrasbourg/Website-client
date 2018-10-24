<template>
  <v-app light>
    <default-layout-header />

    <router-view />

    <default-layout-footer />
  </v-app>
</template>

<script>
import DefaultHeader from './DefaultHeader'
import DefaultFooter from './DefaultFooter'

export default {
  name: 'default-layout',
  components: {
    'default-layout-header': DefaultHeader,
    'default-layout-footer': DefaultFooter
  }
}
</script>
