<template>
  <nav>
    <ul class="menu-items">
      <li v-for="item in menuItems" :key="item[name]" :class="{ 'active': item[route] === path}">
        <router-link
          :to="item[route]"
        >{{item[name]}}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'menu',
  props: {
    menuItems: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    /**
     * path { string } - Ruta actual
     */
    path: {
      type: String,
      required: true
    },
    route: {
      type: String,
      required: true
    }
  }
}
</script>
