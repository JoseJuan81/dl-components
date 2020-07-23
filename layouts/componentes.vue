<template>
  <UserProfileLayout
    class="profile container mx-auto px-4 pt-4"
    :show="show"
    :break-point="768"
  >
    <template v-slot:aside>
      <ul class="menu-web">
        <li v-for="c in components" :key="c.name">
          <router-link
            :to="{ name: c.route }"
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
        <button
          class="go-back"
          type="button"
          @click="show = false"
        >regresar</button>
        <ul class="menu-web">
          <li v-for="c in components" :key="c.name">
            <router-link
              :to="{ name: c.route }"
            >{{c.name}}</router-link>
          </li>
        </ul>
      </div>
    </template>
  </UserProfileLayout>
</template>
<script>
import UserProfileLayout from '~/my-components/UserProfileLayout'

function data () {
  return {
    components: [
      { name: 'dl-tree-nodes', route: 'tree-nodes' },
      { name: 'dl-responsive-table', route: 'responsive-table' },
      { name: 'dl-multiselect', route: 'multiselect' },
      { name: 'dl-breadcrumbs', route: 'breadcrumbs' },
      { name: 'dl-kanban', route: 'kanban' },
      { name: 'dl-gantt', route: 'gantt' },
      { name: 'dl-pareto', route: 'pareto' }
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
