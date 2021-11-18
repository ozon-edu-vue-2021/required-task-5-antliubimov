<template>
  <div>
    <h2>Избранное</h2>
    <List :list="favoritesList" :toCart="false">
      <template v-slot:empty>В избранном ничего нет:(</template>
    </List>
  </div>
</template>

<script>
import List from "@/components/List";

export default {
  name: "Favorites",
  components: {
    List,
  },
  computed: {
    favoritesList() {
      return this.$store.getters.favoritesList;
    },
  },
};
</script>

<style scoped></style>
