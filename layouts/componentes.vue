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
      <template v-slot:aside>
        <div>
          <h2 class="menu-section-title">Componentes</h2>
          <ul class="menu-web">
            <li v-for="c in components" :key="c.name" :class="{ 'active': c.route === $route.path}">
              <router-link
                :to="c.route"
              >{{c.name}}</router-link>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="menu-section-title">Gráficas</h2>
          <ul class="menu-web">
            <li v-for="g in graphips" :key="g.name" :class="{ 'active': g.route === $route.path}">
              <router-link
                :to="g.route"
              >{{g.name}}</router-link>
            </li>
          </ul>
        </div>
      </template>
      <template v-slot:main-content>
          <div class="max-w-3xl">
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
            <ul class="menu-movil">
              <li v-for="c in components" :key="c.name" :class="{ 'active': c.route === $route.path}">
                <router-link
                  :to="c.route"
                >{{c.name}}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </UserProfileLayout>
  </div>
</template>
<script>
import UserProfileLayout from '~/my-components/UserProfileLayout/src/components/user-profile-layout'

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
      { name: 'dl-pareto', route: '/graficas/barras' },
      { name: 'dl-pareto', route: '/graficas/dona' },
      { name: 'dl-pareto', route: '/graficas/sunburst' }
    ],
    currentComponent: null,
    show: false
  }
}

export default {
  name: 'componentes',
  components: {
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
