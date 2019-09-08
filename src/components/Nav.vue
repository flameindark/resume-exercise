<template>
  <nav class="nav">
    <router-link :class="['link-item', $route.path === router.path ? 'active' : '']" v-for="router in routers" :to="router.path" :key="router.path">{{router.meta.title}}</router-link>
  </nav>
</template>

<script>
export default {
  computed: {
    routers() {
      return this.$router.options.routes
    }
  },
  mounted() {
    console.log(this.routers)
  }
}
</script>

<style lang="scss">
.nav {
  line-height: 60px;
  display: flex;
  left: 0px;
  top: 0;
  width: 100%;
  justify-content: center;
  .link-item {
    margin-left: 40px;
    text-decoration: none;
    font-size: 18px;
    color: #333;
    padding: 0 20px;
    cursor: pointer;
    &:visited {
      color: #333;
    }
    &.active {
      color: #2090f7;
    }
  }
}
</style>
