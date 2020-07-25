
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Index.vue') },
      { path: '/criar', component: () => import('pages/criarReceita.vue') },
      { path: '/editar', props: true,  name: 'editar', component: () => import('pages/editarReceita.vue') },
      { path: '/visualizar', props: true,  name: 'visualizar', component: () => import('pages/visualizarReceita.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
