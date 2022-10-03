<template>
  <div>
    <v-card class="mx-auto" max-width="344">
      <v-spacer></v-spacer>

      <span style="margin-right: 80px">ObjectId</span>
      <v-btn style="margin-left: 130px" icon>
        <v-icon color="red">mdi-delete</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <span style="align:center">Aakash</span>
      <v-spacer></v-spacer>
    
      <v-btn style="margin-right: 100px" icon>
        <v-icon color="grey">mdi-arrow-left-bold</v-icon>
      </v-btn>
      <v-btn style="margin-left: 120px" icon>
        <v-icon color="grey">mdi-arrow-right-bold</v-icon>
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    reveal: false,
  }),
};
</script>
 