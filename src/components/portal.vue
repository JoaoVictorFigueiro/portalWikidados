<template>
    <div> 
        <topHeader class="topHeader"></topHeader>
        <sidebar class="sidebar"></sidebar>
        <router-view></router-view>
    </div>
</template>

<script>
import topHeader from '@/components/topHeader.vue'
import sidebar from '@/components/sidebar.vue'

export default {
    name: 'portal',
    components: {
        topHeader,
        sidebar
        }
    }

</script>

<style>
</style>