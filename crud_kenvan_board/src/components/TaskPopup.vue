<template>
  <div>
    <div>
      <v-card
        class="my-3 note-card"
        id="noteCard"
        elevation="9"
        @click="active = true"
      >
        <div v-if="active">
          <v-toolbar flat>
            <v-text-field
              class="note-title pt-5"
              name="note-title"
              flat
              solo
              label="Title"
              v-model="noteTitle"
            ></v-text-field>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-footer flat color="white">
            <v-spacer></v-spacer>
            <v-btn id="close-card" text v-on:click="takeNote"> close </v-btn>
          </v-footer>
        </div>
        <div >
          <v-toolbar flat>
            <v-spacer></v-spacer>
          </v-toolbar>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>

export default {
  name: "Note",
  data: () => ({
    noteTitle: "",
    active: true,
  }),
};
</script>