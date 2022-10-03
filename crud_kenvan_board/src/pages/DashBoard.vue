<template>
    <div id="top-search-bar">
         <SearchBar />
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