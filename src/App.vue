<script>
import Navbar from './views/Navbar.vue';
export default {
  data(){
    return {
      staticPage:['/login','/']
    }
  },
  components: {
    // Navbar
  },
}
</script>

<template>
<!-- <Leave/> -->
<div v-if="this.staticPage.includes(this.$route.path)">
  <router-view />
</div>
<div v-else>
  <!-- <Navbar/> -->
  <router-view />
</div>
   
</template>

<style>
</style>
