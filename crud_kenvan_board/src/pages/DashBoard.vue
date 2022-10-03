<template>
    <div id="top-search-bar">
         <SearchBar />
         <div class="text-center">
   <PopUp />
    </div>
          
        </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
import PopUp from '../components/TaskPopup.vue'
export default {
  name: 'dashboard',
  components: {
    SearchBar,
    PopUp
  },
}
</script>