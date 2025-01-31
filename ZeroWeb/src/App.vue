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
    ProdBuilder
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
      paths: NavStruct
    }
  },
  watch: {

  },
  methods: {
    handleResize() {
      this.smScreen = (window.outerWidth < 960)
    },
  },
  computed: {

  },
}
</script>

<template>
  <div class='wrapper'>
    <NavBar :paths='this.paths' id="navbar"/>
    <h1>small screenn:{{ smScreen }}</h1>
    <h1>mobile UA: {{ mobileUA }}</h1>
    <RouterView />
  </div>

</template>

<style>
.ubuntu-mono-regular {
  font-family: "Ubuntu Mono", serif;
  font-weight: 400;
  font-style: normal;
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
}

:root {
    --mainbg: #eee2dfff;
    --hlit1: #4f759bff;
    --maintext: #050517ff;
    --hlit2: #74a57fff;
    --warn: #dd1c1aff;
}

</style>
