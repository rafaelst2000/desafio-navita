<template>
  <section>
    <div class="card-container">
      <header class="card-header">
        <h2>{{ computedType }}</h2>
      </header>
      <div class="card-content">
        <h2>{{ type }}</h2>
        <ul>
          <li>
            <CardListItem
              v-for="item in content"
              :key="item.codigo"
              :item="item"
              :type="type"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import CardListItem from "./CardListItem";
export default {
  props: ["type", "content"],
  components: {
    CardListItem
  },
  created() {
    console.log("contet", this.content);
  },
  computed: {
    computedType() {
      return this.type == "Marca" ? "Marcas" : "Modelos";
    }
  }
};
</script>

<style scoped>
section {
  padding: 20px;
}
.card-container {
  background: var(--white);
  border-radius: 10px;
  box-shadow: 5px 5px 15px 0px rgba(58, 59, 69, 0.15);
}
.card-header {
  padding: 20px;
  background-color: var(--header-gray);
  border-bottom: 1.5px solid var(--border-gray);
}
.card-header h2 {
  color: var(--secundary);
  font-size: 1.8rem;
}
.card-content {
  padding: 20px 20px;
}
.card-content h2 {
  padding: 10px 0 10px 10px;
  border-top: 1.5px solid var(--border-gray);
  border-bottom: 1.5px solid var(--border-gray);
}
ul {
  max-height: 40vh;
  overflow: auto;
}
</style>
