<template>
    <div id="todosChamadosContainer">
        <div>
            <b-tabs
                active-nav-item-class="font-weight-bold text-primary"
                active-tab-class="font-weight-bold text-success"
                content-class="mt-3 text-center"
            >
                <b-tab @click="routes.push({name:'mode', params: {mode: 'mine'}})" title="Meus chamados" active ></b-tab>
                <b-tab @click="routes.push({name:'mode', params: {mode: 'all'}})" title="Todos chamados"></b-tab>
                <b-tab @click="" title="Novo chamado"></b-tab>
            </b-tabs>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import router from '@/router/router.js'

export default {
    name: 'chamados',
    data() {
        return {
            routes: router
        }
    },
    methods: {
        
    }

}
</script>

<style>

#loading {
    display: grid;
    place-items: center;
    color: #2faa4b;
}

#todosChamadosContainer {
    margin-left: 20px;
    margin-right: 20px;
}

</style>

<!-- 
<template>
    <div id="chamadosContainer">
        <router-view></router-view> 
    </div>
</template>

<script>
export default {
    name: 'todosChamados',

    methods: {

    }

}
</script>

<style>

</style> -->