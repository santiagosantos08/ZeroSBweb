<template>
    <div class="compWrapper ubuntu-mono-regular">

            <h1 class="leftCol" id="title"> {{ prodName }}</h1>
            <h2 class="leftCol" id="sub"> ComputerDependant // StandAlone </h2>
            <h3 class="leftCol" id="desc"> Descripcion larga esto es una descripcion re larga para ver como wrappea el texto lalalaa este producto es una locura chabon no sabes lo prendes y de repende sos Hendrix con Mitchells yafue todo mal . Creeme pa, si no me crees comprate uno y fijate que piola.. Obvio hay que gatillar que querías todo de arriba?</h3>
            <button class="leftCol ubuntu-mono-bold" id="ordbtn"> Order // customize </button>


            <img src="../assets/sampleimg.webp" id="imagenProd">


    </div>
</template>

<style scoped>
.compWrapper {
    display: grid;
    grid-template-columns: v-bind(defaultGridColPartitioning);
    grid-template-rows: 10vh 10vh 20vh 10vh;
    overflow: hidden;
    align-items: center;
    border-bottom: 3px dotted;
    padding-bottom: 2%;
    padding-top: 2%;
}

.leftCol {
    grid-column: v-bind(textCol);
    margin-right: v-bind(rPad);
    margin-left: v-bind(lPad);
}

#title {
    grid-row: 1;
}

#sub {
    grid-row: 2;
}

#desc {
    margin-top: -15px;
    grid-row: 3;
}

#ordbtn {
    grid-row: 4;
    background-color: var(--hlit2);
    border: none;
    cursor: pointer;
    padding: 3%;
    margin-top: -15px;
    font-size: 24px;
}

#imagenProd{
    display: block;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    grid-column: v-bind(imgCol);
    grid-row: 1 / 5;
    align-self: center;
    justify-self: center;
}
</style>

<script>
export default {
  props: {
    sa: Boolean,
    cd: Boolean,
    name: String,
    inverted: Boolean,
  },
  components: {},
  created() {
    if(this.inverted){
        this.textCol= 2;
        this.imgCol= 1;
        this.defaultGridColPartitioning= "30% 70%";
        this.lPad= "0%";
        this.rPad= "5%";
    } else {
        this.textCol= 1;
        this.imgCol= 2;
        this.defaultGridColPartitioning= "70% 30%";
        this.lPad= "5%";
        this.rPad= "0%";
    }
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  data() {
    return {
        textCol: null,
        imgCol: null,
        defaultGridColPartitioning: null,
        rPad: null,
        lPad: null,
        prodName: this.name
    }
  },
  watch: {},
  methods: {},
  computed: {},
}
</script>
