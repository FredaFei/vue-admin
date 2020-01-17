<!--需要使用组件实例ref属性只能在父组件定义ref属性，使用this.$refs.<父组件ref属性名>.$children[0]获取-->
<template>
  <div class="app-container">
    <section class="demo-box">
      <h2>基础表格</h2>
      <el-button @click="resetDateFilter">清除日期过滤器</el-button>
      <base-table :data="tableData" :columns="columns" :stripe="false"
                  :default-sort="{prop: 'date', order: 'descending'}" ref="filterTable"></base-table>
    </section>
  </div>
</template>
<script>
  import data from './data'
  const {columns1, tableData} = data

  export default {
    name: 'v-base-table',
    data() {
      return {
        columns: columns1,
        tableData
      }
    },
    methods: {
      resetDateFilter() {
        this.$refs.filterTable.$children[0].clearFilter('date');
      },
    },
  }
</script>