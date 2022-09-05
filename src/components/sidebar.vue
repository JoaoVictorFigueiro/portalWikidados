<template>
    <div id="sideBarContainer">
      <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
        <template #default="{ hide }">
          <div class="p-3 mainMenu">
            <p>
              Menu de opções
            </p>
            <nav class="mb-3">
              <b-nav v-for="modulos in ['chamados', 'equipamentos', 'contratos', 'pedidos de vendas', 'cotações', 'documentos']" vertical class="sidebarContent">
                <b-nav-item v-if="modulos == 'chamados'" class="modulos">
                  <router-link :to="{name:'mode', params: {mode: 'mine'}}"> {{modulos | capFirst()}} </router-link> 
                </b-nav-item>
                <b-nav-item v-else class="vertical-align">
                  <router-link  :to="'/' + modulos">{{modulos | capFirst()}} </router-link>
                </b-nav-item>
                <b-collapse aria-labelledby="sidebar-no-header-title" :id="modulos" class="modulos">
                  <div class="ms-5">
                    <b-nav-item> <router-link to="/chamados">Todos os chamados</router-link> </b-nav-item> 
                  </div>
                </b-collapse>
              </b-nav>
            </nav>
          </div>
        </template>
      </b-sidebar>
    </div>
</template>

<script>
  export default {
      name: 'sidebar',

      data() {
        return {
          
        }
      },

      filters:{
        capFirst(str) {
          str = str.charAt(0).toUpperCase() + str.slice(1)
          return str
        }
      },

      methods: {
        
      }
  }
</script>

<style scoped>

.b-sidebar-outer {
  z-index: 1 !important;
}

.mainMenu {
  margin-top: 50px;
}

.modulo > *::after {
  content: ' asdada';
  background-color: rgb(242, 242, 242, 30%);
  margin-left: 10px;
  height: 100%;
  width: 2px;
}

.sidebarContent *{
  margin-top: 5px;
  border-radius: 5px;
  text-decoration: none !important;
  color: var(--letras);
  font-weight: 600;
}

.sidebarContent svg {
  vertical-align: middle;
}

.sidebarContent {
  position: relative;
}

</style>