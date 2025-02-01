<template>
    <div class="compWrapper">
        <img v-if="darkMode === true" src="../assets/sun.svg" @click="toggle"/>
        <img v-else src="../assets/moon.svg" @click="toggle"/>
    </div>
</template>

<style scoped>
.compWrapper {
    border-radius: 100%;
    background-color: v-bind(bgColor);
    width: 35px;
    height: 35px;
    display: flex;
}

.compWrapper:hover {
    cursor: pointer;
}

img {
    width: 80%;
    height: 80%;
    margin: auto;
}
</style>

<script>
export default {
  props: {},
  components: {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  data() {
    return {
        darkMode: false,
        bgColor: '#3c3836'
    }
  },
  watch: {},
  methods: {
    toggle() {
        if(this.darkMode === true) {
            this.darkMode = false;
            this.bgColor = "#3c3836";
        } else {
            this.darkMode = true;
            this.bgColor = "#eee2dfff";
        }
        this.$emit('toggle',this.darkMode);
    }
  },
  computed: {},
}
</script>
