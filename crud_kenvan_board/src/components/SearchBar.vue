<template>
    <div id="top-search-bar">
          <v-text-field
            class="mt-5 appBar"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            autocomplete="off"
            dense
            v-model="search"
          ></v-text-field>
          
        </div>
</template>

<script>
export default {
  name: 'SearchBar',
}
</script>