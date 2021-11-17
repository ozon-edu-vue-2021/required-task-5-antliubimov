<template>
  <div>
    <h2>Избранное</h2>
    <ul v-if="favoritesList.length" class="favorite-list">
      <li
        v-for="product in favoritesList"
        :key="product.id"
        class="favorite-item"
      >
        <Card :product="product" />
      </li>
    </ul>
    <h3 v-else>В избранном ничего нет:(</h3>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "Favorites",
  components: {
    Card,
  },
  computed: {
    favoritesList() {
      return this.$store.getters.favoritesList;
    },
  },
};
</script>

<style scoped>
.favorite-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
}
.favorite-item {
  width: 300px;
  height: 545px;
  box-sizing: border-box;
  margin-left: 20px;
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #000000;
  box-shadow: 4px 4px 11px rgba(0, 0, 25, 0.5);
}
</style>
