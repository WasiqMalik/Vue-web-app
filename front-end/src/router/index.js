import Vue from 'vue'
import VueRouter from 'vue-router'
import ShoppingCart from '../views/Cart.vue'
import ProductsCatalog from '../views/ProductsCatalog.vue'
import ProductDetails from '../views/ProductDetails.vue'
import NotFoundPage from '../views/NotFound.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'Products',
    component: ProductsCatalog,
  },

  {
    path: '/products/:id',
    name: 'ProductDetails',
    component: ProductDetails,
  },

  {
    path: '/cart',
    name: 'Cart',
    component: ShoppingCart,
  },

  {
    path:'/',
    redirect:'/products'
  },

  {
    path:"*",
    componnent: NotFoundPage
  }


]

const router = new VueRouter({
  mode: 'history', 
  base: process.env.BASE_URL,
  routes
})

export default router
