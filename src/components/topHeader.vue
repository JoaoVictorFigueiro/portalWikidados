<template>
    <div>
        <header>
            <div v-b-toggle.sidebar-no-header class="iconContainer text-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg>
            </div>
            <div class="bemVindo">
                <span> Olá! <strong> {{profile.customer_details.firstname}} </strong> Seja bem vindo ao portal wikidados </span>
            </div>
            <div class="avatarContainer">
                <b-avatar></b-avatar>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        name: 'topHeader',
        data() {
            return {
                profile: JSON.parse(localStorage.getItem('profile'))
            }
        }
    }
</script>

<style scoped>

@import '@/static/baseCores.css';

header {
    display: flex;
    gap: 5px;
    place-items: center;
    background-color: var(--outros1);
    padding: 20px;
    box-shadow: var(--bordas) 0px 1px 20px;
    margin-bottom: 30px;
    z-index: 2;
    width: 100%;
}

header > div {
    color: var(--letras);
    flex-grow: 1;
}

.bemVindo {
    text-align: center;
}

.iconContainer {
    z-index: 2;
    background-color: transparent;
}

.avatarContainer {
    text-align: end;
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