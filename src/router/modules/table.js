import Layout from '@/layout'

export default {
  path: '/table',
  component: Layout,
  redirect: '/table/base-table',
  name: 'table',
  meta: {title: 'table 表格', icon: 'table'},
  children: [
    {
      path: 'base-table',
      name: 'base-table',
      component: () => import('@/views/table/baseTable'),
      meta: {title: '基础表格'}
    },
    {
      path: 'custom-table',
      name: 'custom-table',
      component: () => import('@/views/table/customTable'),
      meta: {title: '自定义列模板'}
    },
    {
      path: 'inline-edit-table',
      name: 'inline-edit-table',
      component: () => import('@/views/table/inlineEditTable'),
      meta: {title: '编辑表格'}
    }
  ]
}