import Vue from 'vue'
import VueRouter from 'vue-router'
import { isLoggedIn, checkAdmin } from '../api/utils'


Vue.use(VueRouter)

const routes = [
  {
    path: '/clientes',
    name: 'Clientes',

    component: () => import('../views/Clientes.vue'),
    //RUTA PRIVADA
    meta: {
      allowAnonymous: false,
    },
  },
  {
    path: '/add-clientes',
    name: 'AddClients',

    component: () => import('../views/AddClients.vue'),
    //RUTA PRIVADA
    meta: {
      allowAnonymous: false,
      allowNoAdmin: false
    },
    beforeEnter: (to, from, next) => {
      if (to.meta.allowNoAdmin === false && !checkAdmin()) {
        next({
          path: '/productos',
        })
      }
      else {
        next()
      }
    }
  },
  {
    path: '/productos',
    name: 'Productos',

    component: () => import('../views/Productos.vue'),
    //RUTA PRIVADA
    meta: {
      allowAnonymous: false,
    },
  },
  {
    path: '/about',
    name: 'About',

    component: () => import('../views/About.vue'),
    //RUTA PUBLICA
    meta: {
      allowAnonymous: true,
    },
  },
  {
    path: "/",
    name: "Login",
    component: () =>
      import("../views/Login.vue"),
    //RUTA PUBLICA
    meta: {
      allowAnonymous: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import("../views/Register.vue"),
    //RUTA PUBLICA
    meta: {
      allowAnonymous: true,
    },
  },
  {
    path: "*",
    name: "Error",
    component: () =>
      import("../views/Error.vue"),
    //RUTA PUBLICA
    meta: {
      allowAnonymous: true,
    },
  },
]

const router = new VueRouter({
  routes
})

// COMPROBANDO CADA PAXINA POR SE A PERSOA TA LOGEADA
router.beforeEach((to, from, next) => {
  // SI A RUTA E PRIVADA E A PERSOA NON TEN TOKEN
  if (!to.meta.allowAnonymous && !isLoggedIn()) {
    next({
      path: '/',
    })
  } else {
    next()
  }
})

export default router
