<template>
  <div class="app-container">
    <section class="demo-box">
      <h2>基础表单</h2>
      <base-form :form-items="formItems1" submit-context="登录" :merge-form="mergeForm" @after-submit="onOther1"></base-form>
    </section>
  </div>
</template>
<script>
  import {formItems1} from './formItems'

  export default {
    name: 'v-base-form',
    data() {
      return {
        formItems1,
        mergeForm: {},
      }
    },
    methods: {
      onOther1() {console.log('submit success');},
    }
  }
</script>