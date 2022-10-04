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
  <v-row>
    <v-col style="background: grey; color: white">
      <h1 class="text-center">Step1</h1>
      <div class="text-center">
        <Note />
      </div>
    </v-col>
    <v-col
      class="grey lighten-4 mx-2"
      style="background: grey; color: white; height: 500px"
    >
      <h1 class="text-center">Step2</h1>
    </v-col>
    <v-col style="background: grey; color: white">
      <h1 class="text-center">Step3</h1>
    </v-col>
  </v-row>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import PopUp from "../components/TaskPopup.vue";
import Note from "../components/Note.vue";
//const axios = require('axios');

export default {
  name: "dashboard",
  components: {
    SearchBar,
    PopUp,
    Note,
  },
  methods: {
    allTask() {
      fetch("http://localhost:4000/all/items", {
        mode: "no-cors",
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          console.log("json", json);
        });
    },
  },

  mounted() {
    this.allTask();
  },
};
</script>