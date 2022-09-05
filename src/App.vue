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

</style>
