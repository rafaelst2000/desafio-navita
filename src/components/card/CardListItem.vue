<template>
  <div class="list-item">
    <p>{{ item.nome }}</p>
    <a
      v-if="computedType == 'Marcas'"
      :class="{ selected: selectedBrand.codigo == item.codigo }"
      @click="handleSelectBrand(item)"
      >Ver modelos</a
    >
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  props: ["type", "item"],
  computed: {
    ...mapState(["selectedBrand"]),
    computedType() {
      return this.type == "brand" ? "Marcas" : "Modelos";
    }
  },
  methods: {
    ...mapMutations(["SET_BRAND"]),
    handleSelectBrand(brand) {
      this.SET_BRAND(brand);
    }
  }
};
</script>

<style scoped>
.list-item {
  padding: 15px 10px;
  border-top: 1.5px solid var(--border-gray);
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
}
.list-item p {
  font-size: 1.5rem;
}
.list-item a {
  cursor: pointer;
  font-weight: 600;
  color: var(--secundary);
  font-size: 1.5rem;
}
a.selected {
  color: var(--primary);
}
</style>
