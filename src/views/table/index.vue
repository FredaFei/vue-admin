<!--需要使用组件实例ref属性只能在父组件定义ref属性，使用this.$refs.<父组件ref属性名>.$children[0]获取-->
<template>
  <div>
    <section class="demo-box">
      <h2>基础表格</h2>
      <base-table :data="tableData.tableData1" :columns="tableData.columns1" :stripe="false"></base-table>
    </section>
    <section class="demo-box">
      <h2>排序</h2>
      <base-table :data="tableData.tableData2" :columns="tableData.columns2"
                  :default-sort="{prop: 'date', order: 'descending'}"></base-table>
    </section>
    <section class="demo-box">
      <h2>筛选</h2>
      <el-button @click="resetDateFilter">清除日期过滤器</el-button>
      <base-table :data="tableData.tableData3" :columns="tableData.columns3" ref="filterTable"></base-table>
    </section>
    <section class="demo-box">
      <h2>自定义列模板</h2>
      <el-button @click="handleToggleTableHeader">切换表头(自定义指令防抖)</el-button>
      <base-table :data="data" :columns="columns">
        <template v-slot:font>
          <el-table-column type="selection" width="55"></el-table-column>
        </template>
        <template v-slot:testSlot="{scope}">
          <span>{{scope.row.address | format}}</span>
        </template>
        <template v-slot:operator="{scope}">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </base-table>
    </section>
  </div>
</template>
<script>
  import tableData from './data'
  export default {
    name: 'ex-table',
    data() {
      return {
        tableData,
        data:tableData.tableData4,
        columns:tableData.columns4,
        showTableHeader: false
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      resetDateFilter() {
        this.$refs.filterTable.$children[0].clearFilter('date');
      },
      handleToggleTableHeader() {
        this.showTableHeader = !this.showTableHeader;
        //columns属性使用了Proxy拦截同样不需要手动刷新视图
        this.$hideTableHeader(this.columns, "date", this.showTableHeader);
      },
    },
    filters: {
      format(str) {
        return `处理后的——${str.substring(0, 2)}`;
      }
    },
  }
</script>