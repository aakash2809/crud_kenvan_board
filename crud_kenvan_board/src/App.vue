<template>
  <v-app>
    <v-main>
      <DashBoard/>
    </v-main>
  </v-app>
</template>

<script>
import DashBoard from './pages/DashBoard.vue'

export default {
  name: 'App',

  components: {
    DashBoard,
  },

  data: () => ({
    //
  }),
}
</script>
