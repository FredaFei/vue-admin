<template>
  <el-table v-bind="$attrs" v-on="$listeners" :data="data" :empty-text="emptyText" :stripe="stripe">
    <slot name="font"/>

    <template v-for="(column, index) in columns">
      <el-table-column v-bind="column.attrs || {}" :key="index"
                       v-if="isCommonTableColumn(column)&&!column.hidden"></el-table-column>

      <el-table-column v-bind="column.attrs || {}" :key="index" v-else-if="!column.hidden">
        <template v-slot="scope">
          <span v-if="column.slot"><slot :name="column.slot" :scope="scope"/></span>
          <span v-else>{{ scope.row[column.attr] }}</span>
        </template>
      </el-table-column>
    </template>

    <slot/>
  </el-table>
</template>

<script>
  import {proxyProp} from "../../util/proxyProp";
  import {findComponentUpwardByProp} from "../../util/findComponents";

  export default {
    name: 'baseTable',
    props: {
      data: {
        type: Array,
        required: true
      },
      columns: {
        type: Array,
        required: true
      },
    },
    computed: {
      stripe() {
        return this.$attrs['stripe'] !== false
      },
      emptyText() {
        return this.$attrs['empty-text'] || '暂无满足条件的数据'
      },
    },
    mounted() {
      //代理父组件的columns属性
      // todo 父组件columns 参数不能引用对象的
      //  exp: obj = {columns: [...]} use: :columns = "obj.columns" 此时this.$parent不能找到columns参数，
      //  this.$parent.$children中可找到，但vue提示 re-render warning
      let parentComponent = findComponentUpwardByProp(this, "columns");
      if (parentComponent) {
        parentComponent.columns = parentComponent.columns.map(column =>
          proxyProp(column)
        );
      } else {
        throw new Error("can not find parentComponent");
      }
    },
    methods: {
      isCommonTableColumn(column) {
        const specialColumnList = ['slot']
        return !specialColumnList.some(i => column[i])
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
