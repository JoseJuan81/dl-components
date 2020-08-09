<template>
  <div class="pt-10">
    <button
      class="activator"
      type="button"
      @click="show = true"
    >Menú</button>
    <UserProfileLayout
      class="profile container mx-auto pt-4"
      :show="show"
      :break-point="768"
    >
      <template v-slot:asideLeft>
        <div class="wrapper-menu">
          <div>
            <h2 class="menu-section-title">Componentes</h2>
            <MenuLink
              name="name"
              route="route"
              :menu-items="components"
              :path="$route.path"
            ></MenuLink>
          </div>
          <div>
            <h2 class="menu-section-title">Gráficas</h2>
            <MenuLink
              name="name"
              route="route"
              :menu-items="graphips"
              :path="$route.path"
            ></MenuLink>
          </div>
        </div>
      </template>
      <template v-slot:main-content>
          <div class="max-w-2xl mx-auto">
            <transition name="rotating" mode="out-in">
              <Nuxt />
            </transition>
          </div>
      </template>
      <template v-slot:menu-movil>
        <div class="wrapper-menu-movil" data-cy="menu-movil">
          <div class="container-menu-movil">
            <button
              class="go-back"
              type="button"
              @click="show = false"
            >Regresar</button>
            <MenuLink
              name="name"
              route="route"
              :menu-items="components"
              :path="$route.path"
            ></MenuLink>
            <MenuLink
              name="name"
              route="route"
              :menu-items="graphips"
              :path="$route.path"
            ></MenuLink>
          </div>
        </div>
      </template>
      <template v-slot:asideRight>
        <div class="pt-4 sticky top-0 text-sm whitespace-no-wrap grid grid-flow-row text-textSecon">
          <h2 class="font-bold">En esta página:</h2>
          <a class="pt-2" href="/componentes/selector#seccion-introduccion">- Introducción</a>
          <a class="pt-2" href="/componentes/selector#seccion-componente">- Tipos de selectores</a>
          <a class="pt-2" href="/componentes/selector#seccion-propiedades">- Propiedades y slots</a>
          <a class="pt-2" href="/componentes/selector#seccion-archivos">- Archivos</a>
        </div>
      </template>
    </UserProfileLayout>
  </div>
</template>
<script>
import UserProfileLayout from '~/my-components/UserProfileLayout/src/components/user-profile-layout'
import MenuLink from '~/components/componentes/menu'

function data () {
  return {
    components: [
      { name: 'dl-tree-nodes', route: '/componentes/menu-anidado' },
      { name: 'dl-responsive-table', route: '/componentes/tabla-web-y-movil' },
      { name: 'selector', route: '/componentes/selector' },
      { name: 'dl-breadcrumbs', route: '/componentes/breadcrumbs' },
      { name: 'dl-kanban', route: '/componentes/kanban' }
    ],
    graphips: [
      { name: 'dl-gantt', route: '/graficas/gantt' },
      { name: 'dl-pareto', route: '/graficas/pareto' },
      { name: 'dl-barras', route: '/graficas/barras' },
      { name: 'dl-dona', route: '/graficas/dona' },
      { name: 'dl-sunburst', route: '/graficas/sunburst' }
    ],
    currentComponent: null,
    show: false
  }
}

export default {
  name: 'componentes',
  components: {
    MenuLink,
    UserProfileLayout
  },
  data
}
</script>
<style lang="scss" scoped>

.rotating-enter {
  opacity: 0;
}

.rotating-enter-active,
.rotating-leave-active {
  transition: all 0.3s cubic-bezier(0.82, 0.1, 0.65, 0.67);
}

.rotating-leave-to {
  opacity: 0;
}
</style>
