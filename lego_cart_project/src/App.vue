<template>
  <div id="app">
    <nav-header/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavHeader from '@/components/NavHeader.vue'
export default Vue.extend({
  components:{
    NavHeader
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1440px;
  width:100%;
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

body{
  display:flex;
  justify-content: center;
  margin:0;
}

</style>
