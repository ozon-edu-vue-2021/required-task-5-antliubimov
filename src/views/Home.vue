<template>
  <div>
    <h2>Товары</h2>
    <List :list="products" :toCart="false">
      <template v-slot:empty>Товаров нет:(</template>
    </List>
  </div>
</template>

<script>
import List from "@/components/List";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    List,
  },
  computed: {
    ...mapState(["products"]),
  },
};
</script>

<style scoped></style>
