<template>
    <div>
 <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-spacer></v-spacer>

    <span style="margin-right: 80px">ObjectId</span>
   <v-icon color="red"  style="margin-left: 130px">mdi-delete</v-icon> 
       <v-spacer></v-spacer>
    <v-card-actions>
     
    </v-card-actions>


     <v-icon color="grey" style="margin-right: 130px">mdi-arrow-left-bold</v-icon> 
   <v-icon color="grey" style="margin-left: 130px">mdi-arrow-right-bold</v-icon> 
  </v-card>
    </div>
</template>

<script>
export default {
  data: () => ({
      reveal: false,
    }),
}
</script>
 