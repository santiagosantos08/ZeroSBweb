<template>
    <div class="navbarWrapper">
        <div class='wrapperBtns'>
            <img src="../assets/logo.webp" id="logoZNM" @click="redirect('Lander')">
            <button v-for='(item,index) in pathNames' v-text='getBtnText(index)' @click='redirect(index)' class="navbtn ubuntu-mono-regular"></button>
        </div>
    </div>
</template>

<style scoped>
.navbtn {
    flex-grow: 1;
    font-size: 20px;
    padding: 8px;
    background-color: transparent;
    color: var(--maintext);
    border: 0px;
    transition: 0.15s all ease-in-out;
}

.navbtn:hover {
    cursor: pointer;
    scale: 1.2;
    font-weight: 700;
}

.wrapperBtns {
    display: flex;
    flex-direction: row;
    align-items: space-evenly;
    border-bottom: 3px dotted;
    margin-bottom: -1.5px;
    border-color: var(--maintext);
    transition: 0.15s all ease-in-out;
}

.navbarWrapper {
    background-color: var(--mainbg);
    display: flex;
    flex-direction: column;
    align-items: space-evenly;
    transition: 0.15s all ease-in-out;
}

#logoZNM {
    max-height: 80px;
    padding-left: 20px;
    transition: 0.15s all linear;
}

#logoZNM:hover {
    cursor: pointer;
    border-left: 15px solid;
    border-color: var(--maintext);
    scale: 1.06;
}


</style>

<script>
import router from '@/router';
export default {
  props: {
    paths: Object,
  },
  components: {},
  created() {
    this.isOnHome = (this.$route.name == "Lander")
  },
  beforeMount() {},
  mounted() {
  },
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  data() {
    return {
        pathNames: this.paths.pathNames,
        isOnHome: true,
    }
  },
  watch: {
    $route() {
      this.isOnHome = (this.$route.name == "Lander")
    }
  },
  methods: {
    redirect(index) {
        router.replace({ name: index })
    },
    getBtnText(index) {
        if (index == this.$route.name) {
            return '> ' + this.pathNames[index]
        }
        return this.pathNames[index]
    }
  },
  computed: {}
}
</script>
