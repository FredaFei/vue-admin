<!--需要使用组件实例ref属性只能在父组件定义ref属性，使用this.$refs.<父组件ref属性名>.$children[0]获取-->
<template>
  <div class="app-container">
    <section class="demo-box">
      <h2>自定义列模板</h2>
      <el-button @click="handleToggleTableHeader">切换表头(自定义指令防抖)</el-button>
      <base-table :data="tableData" :columns="columns">
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
  import data from './data'

  const {columns2, tableData} = data

  export default {
    name: 'v-custom-table',
    data() {
      return {
        tableData,
        columns: columns2,
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