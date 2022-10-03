<template>
    <div id="top-search-bar">
         <SearchBar />
         <div class="text-center">
          <v-btn
      class="ma-2"
      outlined
      color="grey"
    >
      Add Task
    </v-btn>
   
    </div>
          
        </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
export default {
  name: 'dashboard',
  components: {
    SearchBar,
  },
}
</script>