<template>
  <div class="app-container">
    <section class="demo-box">
      <h2>表单控件联动</h2>
      <base-form :form-items="formItems4" :merge-form="mergeForm" :inline="false" @after-submit="onOther4"></base-form>
    </section>
    <section class="demo-box">
      <h2>异步表单控件联动</h2>
      <base-form :form-items="formItems5" :merge-form="mergeForm" :inline="false" @after-submit="onOther5"></base-form>
    </section>
  </div>
</template>
<script>
  import {formItems4, formItems5} from './formItems'
  import {radioGroup, cascader} from '@/api/form'

  export default {
    name: 'v-linkage-form',
    data() {
      return {
        formItems4,
        formItems5,
        mergeForm: {},
      }
    },
    async mounted() {
      await this.getInfo();
    },
    methods: {
      async getInfo() {
        const [res1, res2] = await Promise.all([radioGroup(), cascader()]);
        this.findItem("asyncRadio").attrs.options = res1;
        this.findItem("cascader").attrs.options = res2;
      },
      findItem(key) {
        return this.formItems5.find(
          formItem => formItem.attrs && formItem.attrs.key === key
        );
      },
      onOther4() {console.log('submit success');},
      onOther5() {console.log('submit success');},
    }
  }
</script>