<template>
    <div id="top-search-bar">
         <SearchBar />
         <div class="text-center">
   <PopUp />
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