const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Principal.vue') },
      { path: 'customization', component: () => import('pages/CustomizationPage.vue') },
      { path: 'avaliacao', component: () => import('pages/IndexPage.vue') },
      { path: 'redacao/:id', component: () => import('pages/RedacaoDetailPage.vue') },
      { path: 'simulados', component: () => import('pages/Simulate.vue') },
      { path: 'provas', component: () => import('pages/GeradorProva.vue') },
      { path: 'sugestao', component: () => import('pages/SugestPage.vue') }
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
