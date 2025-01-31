<template>
    <div class="compWrapper">
        <ProductCard class="prodCard" :inverted='true' :name='"SB - modular guitar fx controller"'/>
        <ProductCard class="prodCard" :inverted='false' name='M2 - 2 channel mixer'/>
        <ProductCard class="prodCard" :inverted='true' name='S16 - 16 beat sequencer'/>
        <ProductCard class="prodCard" :inverted='false' name='M4 - 4 channel mixer'/>
        <ProductCard class="prodCard" :inverted='true' name='F16 - fx controller'/>
        <ProductCard class="prodCard" :inverted='false' name='AI4 - 4 channel audio interface'/>
        <ProductCard class="prodCard" :inverted='true' name='lajhsdjhasj'/>

    </div>
</template>

<style scoped>
</style>

<script>
import ProductCard from '@/components/ProductCard.vue'
export default {
  props: {},
  components: {
    ProductCard
  },
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  data() {
    return {}
  },
  watch: {},
  methods: {},
  computed: {},
}
</script>
