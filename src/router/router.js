import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/login.vue'
import chamados from '@/components/chamados/chamados.vue'
import todosChamados from '@/components/chamados/todosChamados.vue'
import novo from '@/components/chamados/novoChamado.vue'
import portal from '@/components/portal.vue'
// import equipamentos from '@/components/equipamentos.vue'
// import contratos from '@/components/contratos.vue'
// import pvs from '@/components/pvs.vue'
// import cotacoes from '@/components/cotacoes.vue'
// import documentos from '@/components/documentos.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/',
            name: 'home',
            component: portal,
            children: [
            {
                path:'/chamados/:mode',
                name: 'chamados',
                component: chamados,
                children: [
                    {
                        path: '',
                        name: 'mode',
                        component:todosChamados
                    },
                    // {
                    //     path:'detalhes/:id',
                    //     name: 'detalhes',
                    //     component: novo
                    // },
                    {
                        path: 'novo',
                        name: 'novo',
                        component: novo
                    }
                ]
            },
        ]
    },
        // {
        //     path: '/equipamentos',
        //     name: 'equipamentos',
        //     component: equipamentos,
        // },
        // {
        //     path: '/contratos',
        //     name: 'contratos',
        //     component: contratos
        // },
        // {
        //     path: '/pedidos-de-venda',
        //     name: 'pedidos-de-venda',
        //     component: pvs
        // },
        // {
        //     path: '/cotacoes',
        //     name: 'cotações',
        //     component: cotacoes
        // },
        // {
        //     path: '/documentos',
        //     name: 'documentos',
        //     component: documentos
        // }
    ]
})
