<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import portal from '@/components/portal.vue'


export default {
  name: 'App',
  components: {
    portal
  }
}
</script>

<style>
@import '@/static/baseCores.css';

#app {
  background-color: var(--fundo);
  height: 100vh;
}

body * {
  color: var(--letras);
}

</style>
