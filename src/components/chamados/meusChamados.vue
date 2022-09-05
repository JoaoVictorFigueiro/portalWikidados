<template>
    <div id="todosChamadosContainer">
        <div v-if="carregando == true" class="text-center" id="loading">
            <b-spinner  id="spinner" larger variant="success" label="" ></b-spinner>
            <strong >Loading</strong>
        </div>
        <b-table :style="`filter:blur(${blur})`" select-mode="range" selectable label-sort-asc="" label-sort-desc="" label-sort-clear="" stripped :items="todosTickets" :fields="campos"></b-table>
        <div class="overflow-auto">
            <div>
                <b-pagination align="center" class="text-center" @click.native="pegarTickets(pagination.paginaAtual)" v-model="pagination.paginaAtual" :total-rows="pagination.totalDePaginas" :per-page="10" size="md"></b-pagination>
            </div>
        </div>
    </div>
</template>

<script>
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
            blur: 0
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
            delete tickets.id
            delete tickets.Priority
            delete tickets["Contact Name"]
            return tickets
        },

        async pegarTickets(pagina){
            this.carregando = true
            this.blur = '5px'
            await this.axios.get(`http://localhost:8080/portal/index.php?api=FetchRecords&filter={}&label=HelpDesk&module=HelpDesk&q={"mode":"mine","page":${pagina}}`)
            .then(todos => {
            this.pagination.totalDePaginas = todos.data.result.count
            todos.data.result.headers.map((valor, index) => valor={"key": valor, "sortable": true, "label": valor})
            this.todosTickets = todos.data.result.records.map((valor, index) => this.removeDescription(valor))
            }, erro => {
                alert(`um erro ocorreu` + erro)
            },).finally(final => {
                this.carregando = false
                this.blur = 0
            })
        },
    },

    created() {
        this.pegarTickets(0)
    }
}
</script>

<style>

#loading {
    display: grid;
    place-items: center;
    color: #2faa4b;
}

</style>