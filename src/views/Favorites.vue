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
import { mapGetters } from "vuex";

export default {
  name: "Favorites",
  components: {
    List,
  },
  computed: {
    ...mapGetters(["favoritesList"]),
  },
};
</script>

<style scoped></style>
