import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/membre/:idMembre',
    name: 'Membre',
    component: () => import('../views/Membre.vue')
  },
  {
    path: '/membres',
    name: 'Membres',
    component: () => import('../views/Membres.vue')
  },
  {
    path: '/poster-message/:idConversation',
    name: 'PosterMessage',
    component: () => import('../views/PosterMessage.vue')
  },
  {
    path: '/conversation/:idConversation',
    name: 'Conversation',
    component: () => import('../views/Conversation.vue')
  },
  {
    path: '/creer-conversation',
    name: 'CreerConversation',
    component: () => import('../views/CreerConversation.vue')
  },
  {
    path: '/',
    name: 'Conversations',
    component: () => import('../views/Conversations.vue')
  },
  {
    path: '/creation-compte',
    name: 'CreationCompte',
    component: () => import('../views/CreationCompte.vue')
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: () => import('../views/Connexion.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
