<template>
  <div>
    <h2>Товары</h2>
    <List :list="productsList" :toCart="false">
      <template v-slot:empty>
        Товаров нет:(
      </template>
    </List>
  </div>
</template>

<script>
import List from "@/components/List";

export default {
  name: "Home",
  components: {
    List,
  },
  computed: {
    productsList() {
      return this.$store.state.products;
    },
  },
};
</script>

<style scoped></style>
