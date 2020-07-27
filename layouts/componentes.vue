<template>
  <div class="pt-10">
    <button
      class="activator"
      type="button"
      @click="show = true"
    >Menú</button>
    <UserProfileLayout
      class="profile container mx-auto px-4 pt-4"
      :show="show"
      :break-point="768"
    >
      <template v-slot:aside>
        <ul class="menu-web">
          <li v-for="c in components" :key="c.name" :class="{ 'active': c.route === $route.path}">
            <router-link
              :to="c.route"
            >{{c.name}}</router-link>
          </li>
        </ul>
      </template>
      <template v-slot:main-content>
          <div class="h-screen lg:pl-4">
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
      { name: 'dl-tree-nodes', route: '/menu-anidado' },
      { name: 'dl-responsive-table', route: '/tabla-web-y-movil' },
      { name: 'dl-multiselect', route: '/multiselector' },
      { name: 'dl-breadcrumbs', route: '/breadcrumbs' },
      { name: 'dl-kanban', route: '/kanban' },
      { name: 'dl-gantt', route: '/gantt' },
      { name: 'dl-pareto', route: '/pareto' }
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
