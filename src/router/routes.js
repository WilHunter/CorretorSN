const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Principal.vue') },
      { path: 'customization', component: () => import('pages/CustomizationPage.vue') },
      { path: 'avaliacao', component: () => import('pages/IndexPage.vue') },
      { path: 'redacao/:id', component: () => import('pages/RedacaoDetailPage.vue') },
      { path: 'simulados/:id', component: () => import('pages/Simulate.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
