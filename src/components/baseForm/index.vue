<template>
  <el-form v-bind="$attrs" :model="Model" :ref="form" :inline="inline" :api="api" :show-message="showMessage"
           :status-icon="statusIcon">
    <template v-for="(item,index) in _formItems">
      <el-form-item :key="index+item.attrs.key" v-bind="item.itemAttrs || {}" :class="item.itemAttrs.className"
                    :prop="item.attrs.key" v-if="item._ifRender">

        <slot v-if="item.slot" :name="item.slot" :scope="Model"></slot>
        <component v-else :is="item.tag" :class="item.itemAttrs.className"
                   v-model="Model[item.attrs.key]" v-bind="item.attrs || {}" v-on="item.listeners || {}"/>
      </el-form-item>
    </template>

    <el-form-item v-if="submit || reset">
      <el-button @click="handleSubmit" type="primary" v-if="submit">{{submitContext}}</el-button>
      <el-button @click="handleReset" v-if="reset">{{ resetContext}}</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {options} from "./options";
  import {proxyProp} from "../../util/proxyProp";
  import {findComponentUpwardByProp} from "../../util/findComponents";

  const form = Symbol('form')
  export default {
    name: 'baseForm',
    props: {
      formItems: {
        type: Array,
        required: true,
        default: () => []
      },
      submit: {
        type: Boolean,
        default: true
      },
      reset: {
        type: Boolean,
        default: true
      },
      submitContext: {
        type: String,
        default: '确定'
      },
      resetContext: {
        type: String,
        default: '重置'
      },
      api: {
        type: Function,
        default: () => {}
      },
      mergeForm: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        Model: {},
        originModel: {},
        form
      }
    },
    computed: {
      _formItems() {
        return this.formItems.map(i => this.computeFormItem(i, this.Model)) || []
      },
      showMessage() {
        return this.$attrs['show-message'] !== false
      },
      statusIcon() {
        return this.$attrs['status-icon'] !== false
      },
      inline() {
        return this.$attrs['inline'] !== false
      }
    },
    watch: {
      //使用watch观察父组件传入的formItems,初始化Model对象(只调用一次)
      formItems: {
        handler() {
          this.formItems.forEach(formItem => {
            if (!formItem.attrs || !formItem.attrs.key) {return}
            this.$set(this.Model, formItem.attrs.key, formItem.attrs.value ? formItem.attrs.value : '')
          })
          this.originModel = JSON.parse(JSON.stringify(this.Model))
        },
        deep: true,
        immediate: true
      },
      mergeForm: {
        handler() {this.mergeModel()},
        deep: true,
        immediate: true
      }
    },
    mounted() {
      //代理父组件的columns属性
      let parentComponent = findComponentUpwardByProp(this, "mergeForm");
      if (parentComponent) {
        parentComponent.mergeForm = proxyProp(parentComponent.mergeForm);
      } else {
        throw new Error("can not find parentComponent");
      }
    },
    methods: {
      computeFormItem(formItem, Model) {
        const item = {...formItem}
        let tag = item.tag || 'input'
        let optionItem = options[tag]
        item.tag = optionItem.component
        item.attrs = Object.assign({}, optionItem.attrs, item.attrs)
        if (item.getAttrs) {
          item.attrs = Object.assign(item.attrs, item.getAttrs(Model))
        }
        item._ifRender = item.ifRender ? item.ifRender(Model) : true
        if (!item._ifRender) {
          delete Model[item.attrs.key]
        }
        return item
      },
      mergeModel() {
        Object.assign(this.Model, this.mergeForm)
      },
      handleSubmit() {
        this.$refs[form].validate(async valid => {
          if (valid) {
            let result = this.api ? await this.api(this.Model) : ''
            this.$emit('after-submit', result)
          }
        })
      },
      handleReset() {
        this.Model = JSON.parse(JSON.stringify(this.originModel))
      },
    }
  }
</script>

<style scoped>
  .base-pagination {
    margin-top: 10px;
    text-align: right;
  }
</style>
