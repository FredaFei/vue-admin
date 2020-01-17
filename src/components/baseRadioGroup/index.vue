<template>
  <el-radio-group v-bind="$attrs" :value="value" v-on="$listeners">
    <el-radio v-for="item in $attrs.options" :key="item.value" :label="item.value">
      {{ item.label }}
    </el-radio>
  </el-radio-group>
</template>

<script>
  export default {
    name: 'baseRadioGroup',
    props: {
      value: {default: ''}
    }
  }
</script>

<style scoped>
  .base-pagination {
    margin-top: 10px;
    text-align: right;
  }
</style>
