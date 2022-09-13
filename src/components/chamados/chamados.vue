<template>
    <div id="todosChamadosContainer">
        <div class="rotasChamados">
            <router-link class="links" :to="{name:'mode', params: {mode: 'mine'}}"> Meus chamados </router-link>
            <router-link class="links" :to="{name:'mode', params: {mode: 'all'}}"> Todos chamados </router-link>
            <router-link class="links" :to="{path:'novo'}"> Novo chamado </router-link>
        </div>
            <router-view></router-view>
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

<style scoped>
@import '@/static/baseCores.css';

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
body {
    font-family: 'Source Sans Pro', sans-serif;
}

#todosChamadosContainer {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 40px;
}

.rotasChamados {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-bottom: 10px;
    position: relative;
    
}

.links {
    color: var(--letras);
    background-color: transparent;
    padding: 5px 10px 5px 10px;
    font-weight: bold;
    border-radius: 5px;
    box-shadow: 0px 0px 1em 0 hsla(187, 29%, 44%, 1);
    border: solid 2px #09bc8a;
    transform: translateY(-20%);
    position: relative;
    text-decoration: none;
    text-align: center;
}

.links:hover {
    text-shadow: 0px 0px 3em #508991;
    box-shadow: 0px 0px 30px 0px #508991;
    background-color: #09bc8a;
    color: #172a3a;
    transition: all 350ms ease-in-out ;
    position: relative;
}

.links::after {
    content: '';
    background-color: var(--letras);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateY(90%) perspective(1em) rotateX(40deg) scale(1, 0.30);
    filter: blur(1em);
    transition: filter 350ms ease-in-out;
    opacity: var(--opacidade);
}

.router-link-exact-active {
    background-color: var(--letras);
    color: black;
}

.router-link-exact-active::after {
    content: '';
    background-color: var(--letras);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateY(90%) perspective(1em) rotateX(40deg) scale(1, 0.30);
    filter: blur(1em);
    opacity: 1;
}

.links:hover::after {
    opacity: 1;
    transition: all 1s ease;
}
</style>