import Layout from '@/layout'

export default {
  path: '/form',
  component: Layout,
  redirect: '/form/base-form',
  name: 'form',
  meta: {title: 'form 表单', icon: 'form'},
  children: [
    {
      path: 'base-form',
      name: 'base-form',
      component: () => import('@/views/form/baseForm'),
      meta: {title: '基础表单'}
    },
    {
      path: 'validate-form',
      name: 'validate-form',
      component: () => import('@/views/form/validateForm'),
      meta: {title: '表单验证'}
    },
    {
      path: 'linkage-form',
      name: 'linkage-form',
      component: () => import('@/views/form/linkageForm'),
      meta: {title: '表单联动'}
    },
    {
      path: 'custom-slot-form',
      name: 'custom-slot-form',
      component: () => import('@/views/form/customSlotForm'),
      meta: {title: '自定义表单插槽'}
    },
  ]
}