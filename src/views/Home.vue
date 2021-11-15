<template>
  <div>
    <h2>Товары</h2>
    <ul class="product-list">
      <li
        v-for="product in productsList"
        :key="product.uid"
        class="product-item"
      >
        <Card :product="product" />
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "Home.vue",
  components: {
    Card,
  },
  created() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    productsList() {
      return this.$store.state.products;
    },
  },
};
</script>

<style scoped></style>
