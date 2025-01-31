import { createRouter, createWebHistory } from 'vue-router'
import Lander from  '@/components/Lander.vue'
import About from '@/components/About.vue'
import Donations from '@/components/Donations.vue'
import Downloads from '@/components/Downloads.vue'
import News from '@/components/News.vue'
import ProdGallery from '@/components/ProdGallery.vue'
import SoftSolutions from '@/components/SoftSolutions.vue'
import SourceSchematics from '@/components/SourceSchematics.vue'
import Contact from '@/components/Contact.vue'
import ProdBuilder from '@/components/ProdBuilder.vue'
import NotFound from '@/components/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Lander',
      component: Lander,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/donate',
      name: 'Donations',
      component: Donations,
    },
    {
      path: '/downloads',
      name: 'Downloads',
      component: Downloads,
    },
    {
      path: '/news',
      name: 'News',
      component: News,
    },
    {
      path: '/productgallery',
      name: 'ProdGallery',
      component: ProdGallery,
    },
    {
      path: '/softwaresolutions',
      name: 'SoftSolutions',
      component: SoftSolutions,
    },
    {
      path: '/source',
      name: 'SourceSchematics',
      component: SourceSchematics,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/buildit',
      name: 'ProdBuilder',
      component: ProdBuilder,
    },
    {
      path: '/:pathMatch(.*)',
      name: 'NotFound',
      component: NotFound,
    }
    /*
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    */
  ],
})

export default router
