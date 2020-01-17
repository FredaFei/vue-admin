<template>
  <div v-if="visible" class="base-pagination">
    <el-pagination v-bind="$attrs" v-on="$listeners"></el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'basePagination',
    computed: {
      visible() {
        const {pageSize = 10, total} = this.$attrs
        if (total && total / pageSize > 1) {return true}
        return false
      }
    }
  }
</script>

<style scoped>
  .base-pagination {
    margin-top: 10px;
    text-align: right;
  }
</style>
