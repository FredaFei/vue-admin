export default {
  columns1: [
    {attrs: {label: '日期', prop: 'date', width: '180'}},
    {attrs: {label: '姓名', prop: 'name', width: '180'}},
    {attrs: {label: '地址', prop: 'address'}},
  ],
  tableData1: [{
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄',
  }, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄',
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄',
  }],
  columns2: [
    {attrs: {label: '日期', prop: 'date', width: '180', sortable: true}},
    {attrs: {label: '姓名', prop: 'name', width: '180', sortable: true}},
    {attrs: {label: '地址', prop: 'address'}},
  ],
  tableData2: [{
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄',
  }, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄',
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄',
  }],
  columns3: [
    {
      attrs: {
        label: '日期', prop: 'date', width: '180', columnKey: 'date',
        filterMethod: (value, row, column) => {
          const property = column['property'];
          return row[property] === value;
        },
        filters: [{text: '2016-05-01', value: '2016-05-01'}, {
          text: '2016-05-02',
          value: '2016-05-02'
        }, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]
      }
    },
    {attrs: {label: '姓名', prop: 'name', width: '180'}},
    {attrs: {label: '地址', prop: 'address'}},
  ],
  tableData3: [{
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄',
  }, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄',
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄',
  }],
  columns4: [
    {attrs: {label: '日期', prop: 'date', width: '180'}},
    {attrs: {label: '姓名', prop: 'name', width: '180'}},
    {attrs: {label: '地址', prop: 'address'}},
    {slot: 'testSlot', attrs: {label: '地址2', prop: 'address'}},
    {slot: 'operator', attrs: {label: '操作', prop: 'operator'}},
  ],
  tableData4: [{
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄',
  }, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄',
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄',
  }]
}