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
    background-color: var(--cabecalho);
    padding: 20px;
    box-shadow: var(--letras) 0px 1px 20px;
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
</style>