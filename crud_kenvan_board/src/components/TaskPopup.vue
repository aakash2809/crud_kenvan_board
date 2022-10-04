<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }"  >
        <v-btn
          color="grey lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
          class="mt-5 appBar"
          @click.prevent="openPopup"
        >
          Add Task
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Title
        </v-card-title>
        <v-divider></v-divider>
         <v-text-field
                  label="Type Title"
                  required
                ></v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click.prevent="addTask"
          >
            Add 
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
     name: "Note",
    data () {
      return {
        dialog: false,
      }
    },
    methods: {
        openPopup() {
            this.dialog = true
        },

        addTask() {
            this.dialog = false;
        }
    }
  }
</script>