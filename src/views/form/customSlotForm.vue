<template>
  <div class="app-container">
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
  import {formItems6} from './formItems'
  // todo
  // import {formApi} from '@/api/form'

  export default {
    name: 'v-custom-slot-form',
    data() {
      return {
        formItems6,
        // formApi,
        mergeForm: {
          slotCheckBox: ""
        },
      }
    },
    methods: {
      handleChangeName() {
        //mergeForm使用了Proxy拦截所以不需要手动刷新视图
        this.mergeForm.name = "test"
      },
      onOther6() {console.log('submit success ~');},
    }
  }
</script>