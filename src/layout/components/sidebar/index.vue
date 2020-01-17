<template>
  <el-menu>
    <sidebar-item v-for="route in routes" :key="route.path" :item="route"></sidebar-item>
  </el-menu>
</template>
<script>
  import SidebarItem from './sidebarItem'
  export default {
    name: 'sidebar',
    components: {SidebarItem},
    data(){
      return {}
    },
    computed: {
      routes(){
        console.log(this.$route);
        return []
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>