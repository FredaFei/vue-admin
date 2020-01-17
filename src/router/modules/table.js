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
      component: () => import('@/views/table/index'),
      meta: {title: '基础表格'}
    },
    {
      path: 'inline-edit-table',
      name: 'inline-edit-table',
      component: () => import('@/views/table/index'),
      meta: {title: '编辑表格'}
    }
  ]
}