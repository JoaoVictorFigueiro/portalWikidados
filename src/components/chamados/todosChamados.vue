<template>
    <div id="todosChamadosContainer">
        <div>
            <div v-if="carregando == true" class="text-center" id="loading">
                <b-spinner id="spinner" larger variant="success" label="" ></b-spinner>
                <strong >Loading</strong>
            </div>
            <b-table @row-clicked="teste($event.id)" v-if="todosTickets.length > 0" :style="`filter:blur(${blur})`" id="mainTable" select-mode="range" label-sort-asc="" label-sort-desc="" label-sort-clear="" stripped :items="todosTickets" :fields="campos">
                <div slot="info" slot-scope="data">
                    <a href=""> {{data.value.Tittle}}</a>
                </div>
            </b-table>
            <h3 v-if="todosTickets.length <= 0" class="text-center"> Você não possui chamados </h3>
        </div>
        <div class="overflow-auto">
            <div>
                <b-pagination align="center" class="text-center text-success" id="pagination" @click.native="pegarTickets(pagination.paginaAtual-1, $route.params.mode)" v-model="pagination.paginaAtual" :total-rows="pagination.totalDePaginas" :per-page="10" size="md"></b-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router/router.js'

export default {
    name: 'todosChamados',

    data() {
        return {
            todosTickets: [],
            campos: [
                {
                    key: 'Title',
                    sortable: true,
                    label: 'Titulo'
                },
                {
                    key: 'Ticket Number',
                    sortable: true,
                    label: 'Numero chamado'
                },
                {
                    key: 'Status',
                    sortable: true,
                    label: 'Status'
                },
                {
                    key: 'Grupo',
                    sortable: true,
                    label: 'Grupo'
                },
                {
                    key: 'Placa do veículo',
                    sortable: true,
                    label: 'Placa'
                },
                {
                    key: 'Assigned To',
                    sortable: true,
                    label: 'Responsavel'
                }
            ],
            pagination: {
                paginaAtual: 1,
                totalDeLinhas: 10,
                totalDePaginas: 0
            },
            selecionados: this.items,
            carregando: false,
            blur: 0,
        }
    },

     props: {
        items: Array,
        fields: Array
    },

    methods: {
        removeDescription(tickets) {
            delete tickets.Description
            delete tickets.Solution
            delete tickets.Priority
            delete tickets["Contact Name"]
            return tickets
        },

        teste(row) {
            console.log(row)
        },

        async pegarTickets(pagina, mode){
            this.carregando = true
            this.blur = '4px'
            await this.axios.get(`http://localhost:8080/portal/index.php?api=FetchRecords&filter={}&label=HelpDesk&module=HelpDesk&q={"mode":"${mode}","page":${pagina}}`)
            .then(todos => {
            this.pagination.totalDePaginas = todos.data.result.count
            //todos.data.result.headers.map((valor, index) => valor={"key": valor, "sortable": true, "label": valor})
            this.todosTickets = todos.data.result.records.map((valor, index) => this.removeDescription(valor))
            }).catch(erro => {
                alert('Sua sessão expirou, faça login novamente!')
                router.push('/login')
            }).finally(final => {
                this.carregando = false
                this.blur = 0
            })
        },
    },

    created() {
        router.push({name:'mode', params: {mode: 'mine'}})
        this.pegarTickets(this.pagination.paginaAtual-1, 'mine')
        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                this.pegarTickets(this.pagination.paginaAtual-1, toParams.mode)
            }
        )
    }
}
</script>

<style>

@import '@/static/baseCores.css';

#loading {
    display: grid;
    place-items: center;
    color: #2faa4b;
}

#todosChamadosContainer {
    margin-left: 20px;
    margin-right: 20px;
}

#pagination *{
    background-color: var(--fundo);
    color: var(--letras);
    border-color: var(--letras);
}

#pagination .page-item > [aria-checked="true"] {
    background-color: var(--letras);
    color: black;
}

</style>