<template>
  <div class="home">
    <basic-info></basic-info>
    <skills></skills>
    <experients></experients>
  </div>
</template>

<script>
// @ is an alias to /src
import Experients from './experients'
import BasicInfo from './basicInfo'
import Skills from './skills'

export default {
  name: 'home',
  components: {
    Experients,
    BasicInfo,
    Skills
  },
  data() {
    return {
    }
  },
  methods: {

  }
}
</script>
<style lang="scss">
.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
