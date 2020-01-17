<template>
  <div class="app-container">
    <section class="demo-box">
      <h2>表单验证</h2>
      <base-form :form-items="formItems2" :inline="false" :merge-form="mergeForm" @after-submit="onOther2">
      </base-form>
    </section>
    <section class="demo-box">
      <h2>异步表单验证</h2>
      <base-form :form-items="formItems3" @after-submit="onOther3" :merge-form="mergeForm"></base-form>
    </section>
  </div>
</template>
<script>
  import {formItems2, formItems3} from './formItems'

  export default {
    name: 'v-validate-form',
    data() {
      return {
        formItems2,
        formItems3,
        mergeForm: {},
      }
    },
    methods: {
      onOther2() {console.log('submit success');},
      onOther3() {console.log('submit success');},
    }
  }
</script>