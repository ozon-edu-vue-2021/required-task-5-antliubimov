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

  computed: {
    productsList() {
      return this.$store.state.products;
    },
  },
};
</script>

<style scoped>
.product-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
}
.product-item {
  width: 300px;
  box-sizing: border-box;
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #000000;
  box-shadow: 4px 4px 11px rgb(0, 0, 25, 50%);
}
</style>
