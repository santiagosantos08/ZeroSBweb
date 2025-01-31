<script>
import About from '@/components/About.vue'
import Donations from '@/components/Donations.vue'
import Downloads from '@/components/Downloads.vue'
import Lander from '@/components/Lander.vue'
import NavBar from '@/components/NavBar.vue'
import News from '@/components/News.vue'
import ProdGallery from '@/components/ProdGallery.vue'
import SideBar from '@/components/SideBar.vue'
import SoftSolutions from '@/components/SoftSolutions.vue'
import SourceSchematics from '@/components/SourceSchematics.vue'
import ProdBuilder from '@/components/ProdBuilder.vue'
import NavStruct from '@/assets/navPaths.json'
import router from '@/router';
import ThemeSwapper from '@/components/ThemeSwapper.vue'
export default {
  components: {
    About,
    Donations,
    Downloads,
    Lander,
    NavBar,
    News,
    ProdGallery,
    SideBar,
    SoftSolutions,
    SourceSchematics,
    ProdBuilder,
    ThemeSwapper
  },
  created() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    window.addEventListener('resize', this.handleResize)
    this.smScreen = (window.outerWidth < 960)
    this.mobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase())
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize)
  },
  data() {
    return {
      smScreen: false,
      mobileUA: false,
      paths: NavStruct,

      mainbgcol: '#eee2dfff',
      hlit1col: '#4f759bff',
      hlit2col: '#74a57fff',
      maintextcol: '#050517ff',
      warncol: '#dd1c1aff',

      l_mainbgcol: '#eee2dfff',
      l_hlit1col: '#4f759bff',
      l_hlit2col: '#74a57fff',
      l_maintextcol: '#050517ff',
      l_warncol: '#dd1c1aff',

      d_mainbgcol: '#3c3836',
      d_hlit1col: '#8ec07c',
      d_hlit2col: '#458588',
      d_maintextcol: '#d79921',
      d_warncol: '#cc241d',
    }
  },
  watch: {

  },
  methods: {
    handleResize() {
      this.smScreen = (window.outerWidth < 960)
    },
    chTheme(darkMode) {
      console.log(darkMode)
      if(darkMode === true) {
        this.mainbgcol = this.d_mainbgcol
        this.maintextcol = this.d_maintextcol
        this.hlit1col = this.d_hlit1col
        this.hlit2col = this.d_hlit2col
        this.warncol = this.d_warncol
      }else{
        this.mainbgcol = this.l_mainbgcol
        this.maintextcol = this.l_maintextcol
        this.hlit1col = this.l_hlit1col
        this.hlit2col = this.l_hlit2col
        this.warncol = this.l_warncol
      }
    }
  },
  computed: {

  },
}
</script>

<template>
  <div class='wrapper'>
    <NavBar :paths='this.paths' id="navbar" ref="navbar"/>
    <ThemeSwapper id="tswap" @toggle="chTheme"/>
    <router-view id="router" v-slot="{ Component, route }">
          <Transition>
            <component ref="routRef" :is="Component" :key="$route.fullPath"  />
          </Transition>
    </router-view>
    <component is="style">:root { --mainbg : {{mainbgcol}};
                                  --maintext : {{maintextcol}};
                                  --hlit1 : {{hlit1col}};
                                  --hlit2 : {{hlit2col}};
                                  --warn : {{warncol}}}</component>
  </div>

</template>

<style>
.v-enter-active {
  transition: opacity 0.3s linear;
}
.v-leave-active {
  transition: opacity 0s linear;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.ubuntu-mono-regular {
  font-family: "Ubuntu Mono", serif;
  font-weight: 400;
  font-style: normal;
  color: var(--maintext)
}

.ubuntu-mono-bold {
  font-family: "Ubuntu Mono", serif;
  font-weight: 700;
  font-style: normal;
}

.ubuntu-mono-regular-italic {
  font-family: "Ubuntu Mono", serif;
  font-weight: 400;
  font-style: italic;
}

.ubuntu-mono-bold-italic {
  font-family: "Ubuntu Mono", serif;
  font-weight: 700;
  font-style: italic;
}

.wrapper {
  min-width: 100vw;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--mainbg);
  padding-bottom: 100px;
}

#navbar {
  position: fixed;
  min-width: 100vw;
  z-index: 2;
}

#router {
  position: relative;
  top: 80px;
  z-index: 1;
}

#tswap {
  position: absolute;
  top: 100px;
  right: 30px;
  z-index: 3;
}

:root {
    --mainbg: v-bind(mainbgcol);
    --hlit1: #4f759bff;
    --maintext: #050517ff;
    --hlit2: #74a57fff;
    --warn: #dd1c1aff;
}

</style>
