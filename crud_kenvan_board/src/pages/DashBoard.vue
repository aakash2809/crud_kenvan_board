<template>
    <div id="top-search-bar">
         <SearchBar />
         <div class="text-center">
   <PopUp />
   <Note/>
   <template>
                      <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-bell-plus</v-icon>
                      </v-btn>
                    </template>
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
      (this.showNoteCard = true), (this.sideNavAction = "Notes");
      this.isActivate = true;
    },
  },
   mounted() {
    EventBus.$on("sideNavActionForNotes", this.allTask);
  },
}
</script>