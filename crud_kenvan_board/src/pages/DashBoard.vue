<template>
  <v-row>
    <v-col>
      <SearchBar />
    </v-col>
    <v-spacer></v-spacer>
     <v-col>
       <PopUp />
     </v-col>
  </v-row>
    <div>
         
        
         <div class="text-center">
   <Note/>
    </div>
          
        </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
import PopUp from '../components/TaskPopup.vue'
import Note from "../components/Note.vue";
export default {
  name: 'dashboard',
  components: {
    SearchBar,
    PopUp,
    Note
  },
  methods: {
     allTask() {
    },
  },
   mounted() {
   this.allTask()
  },
}
</script>