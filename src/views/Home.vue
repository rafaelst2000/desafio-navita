<template>
  <div class="home">
    <h1 class="title">Veículos</h1>
    <transition mode="out-in">
      <Card type="brand" :content="brands" v-if="brands.length > 0" />
      <Loading v-else />
    </transition>
    <transition mode="out-in">
      <Card
        v-if="cars.length > 0 && !loadingCars"
        type="cars"
        :content="cars"
      />
      <Loading v-if="loadingCars" />
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { api } from "@/services.js";
import Card from "@/components/card/Card";
export default {
  components: {
    Card
  },

  data() {
    return {
      brands: {},
      cars: {},
      loadingCars: false
    };
  },
  created() {
    this.getBrands();
  },
  computed: {
    ...mapState(["selectedBrand"])
  },
  watch: {
    selectedBrand: {
      deep: true,
      handler: async function() {
        this.loadingCars = true;
        api.get(`${this.selectedBrand.codigo}/modelos`).then(res => {
          this.cars = res.data.modelos;
          this.loadingCars = false;
        });
      }
    }
  },
  methods: {
    async getBrands() {
      api.get("").then(res => {
        this.brands = res.data;
      });
    }
  }
};
</script>
<style scoped>
.title {
  font-size: 2.5rem;
  padding: 10px 0 0 20px;
}
</style>
