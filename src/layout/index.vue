<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container"/>
    <div class="main-container">
      <div class="fixed-head">
        <tags-view/>
      </div>
      <app-main/>
    </div>
  </div>
</template>
<script>
  import Sidebar from './components/sidebar'
  import TagsView from './components/tagsView'
  import AppMain from './components/appMain'
  import './index.scss'

  export default {
    name: 'layout',
    components: {
      Sidebar, TagsView, AppMain
    }
  }
</script>