<template>
  <div class="home">
    <h1 class="title">Veículos</h1>
    <Card type="Marca" :content="marcas" />
    <Card v-if="modelos.length > 0" type="Modelo" :content="modelos" />
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
      marcas: {},
      modelos: {}
    };
  },
  created() {
    this.getMarcas();
  },
  computed: {
    ...mapState(["selectedBrand"])
  },
  watch: {
    selectedBrand: {
      deep: true,
      handler: async function() {
        api.get(`${this.selectedBrand.codigo}/modelos`).then(res => {
          this.modelos = res.data.modelos;
        });
      }
    }
  },
  methods: {
    async getMarcas() {
      api.get("").then(res => {
        this.marcas = res.data;
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
