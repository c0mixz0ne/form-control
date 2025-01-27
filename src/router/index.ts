import { createRouter, createWebHistory } from 'vue-router'
import FormControlView from '../views/FormControl.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'form-control',
      component: FormControlView,
    },
  ],
})

export default router
