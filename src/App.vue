<template>
  <v-app>
    <v-main>
      <main-app />
    </v-main>
  </v-app>
</template>

<script>
import MainApp from './components/MainApp.vue'

export default {
  name: 'App',

  components: {
    MainApp
  },

  data: () => ({
    //
  }),
}
</script>

<style lang="scss">
::-webkit-scrollbar {

}
</style>


