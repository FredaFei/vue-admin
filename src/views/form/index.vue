<template>
  <div>
    <section class="demo-box">
      <h2>基础表单</h2>
      <base-form :form-items="formItems1" submit-context="登录" @after-submit="onOther1"></base-form>
    </section>
    <section class="demo-box">
      <h2>表单验证</h2>
      <base-form :form-items="formItems2" :inline="false" :merge-form="mergeForm" @after-submit="onOther2">
      </base-form>
    </section>
    <section class="demo-box">
      <h2>异步表单验证</h2>
      <base-form :form-items="formItems3" @after-submit="onOther3"></base-form>
    </section>
    <section class="demo-box">
      <h2>表单控件联动</h2>
      <base-form :form-items="formItems4" :inline="false" @after-submit="onOther4"></base-form>
    </section>
    <section class="demo-box">
      <h2>异步表单控件联动</h2>
      <base-form :form-items="formItems5" :inline="false" @after-submit="onOther5"></base-form>
    </section>
    <section class="demo-box">
      <h2>自定义插槽</h2>
      <el-button @click="handleChangeName">点我填入用户名</el-button>
      <base-form :form-items="formItems6" :inline="false" :merge-form="mergeForm" @after-submit="onOther6">
        <template v-slot:slotCheckBox>
          <el-checkbox v-model="mergeForm.slotCheckBox">插槽1</el-checkbox>
        </template>
      </base-form>
    </section>
  </div>
</template>
<script>
  import {formItems, formItems1, formItems2, formItems3, formItems4, formItems5,formItems6} from './formItems'
  import {formApi, radioGroup, cascader} from '@/api/form'

  export default {
    name: 'v-base-form',
    data() {
      return {
        formItems,
        formItems1,
        formItems2,
        formItems3,
        formItems4,
        formItems5,
        formItems6,
        formApi,
        mergeForm: {
          slotCheckBox: ""
        },
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
      handleChangeName() {
        //mergeForm使用了Proxy拦截所以不需要手动刷新视图
        this.mergeForm.name = "test"
      },
      onOther1() {console.log('login ~');},
      onOther2() {console.log('验证通过 ~');},
      onOther3() {console.log('异步验证通过 ~');},
      onOther4() {console.log('验证通过 ~');},
      onOther5() {console.log('验证通过 ~');},
      onOther6() {console.log('验证通过 ~');},
    }
  }
</script>