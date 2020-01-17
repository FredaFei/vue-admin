<!--需要使用组件实例ref属性只能在父组件定义ref属性，使用this.$refs.<父组件ref属性名>.$children[0]获取-->
<template>
  <div>
    <section class="demo-box">
      <h2>自定义列模板</h2>
      <el-button @click="handleToggleTableHeader">切换表头(自定义指令防抖)</el-button>
      <base-table :data="tableData" :columns="columns">
        <template v-slot:font>
          <el-table-column type="selection" width="55"></el-table-column>
        </template>
        <template v-slot:editName="{scope}">
          <template v-if="scope.row.edit">
            <el-input v-model="scope.row.name" style="width: 140px;margin-right: 10px" size="small" />
            <el-button size="small" icon="el-icon-refresh" type="warning" @click="cancelEdit(scope.row)">
              cancel
            </el-button>
          </template>
          <span v-else>{{ scope.row.name }}</span>
        </template>
        <template v-slot:testSlot="{scope}">
          <span>{{scope.row.address | format}}</span>
        </template>
        <template v-slot:operator="{scope}">
          <el-button size="mini" type="primary" v-if="scope.row.edit" @click="confirmEdit(scope.row)">OK</el-button>
          <el-button size="mini"  v-else type="success" @click="scope.row.edit=!scope.row.edit">Edit</el-button>
        </template>
      </base-table>
    </section>
  </div>
</template>
<script>
  import data from './data'

  const {columns2, tableData} = data

  export default {
    name: 'v-inline-edit-table',
    data() {
      return {
        tableData: [],
        columns: columns2,
        showTableHeader: false
      }
    },
    created() {
      this.tableData = tableData.map(i=>{
        this.$set(i,'edit',false)
        i.originalName= i.name
        return i
      })
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
      confirmEdit(row) {
        row.edit = false
        row.originalName = row.name
        this.$message({
          message: 'The title has been edited',
          type: 'success'
        })
      },
      cancelEdit(row) {
        row.name = row.originalName
        row.edit = false
        this.$message({
          message: 'The title has been restored to the original value',
          type: 'warning'
        })
      },
    },
    filters: {
      format(str) {
        return `处理后的——${str.substring(0, 2)}`;
      }
    },
  }
</script>