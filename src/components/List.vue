<template>
  <div>
    <ul v-if="list.length" :class="['product-list', { 'cart-list' : toCart}]">
      <li
          v-for="product in list"
          :key="product.id"
          :class="['product-item', {'cart-item': toCart}]"
      >
        <Card :product="product" :toCart="toCart"/>
      </li>
    </ul>
    <h3 v-else>
      <slot name="empty"></slot>
    </h3>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "List",
  components: {
    Card,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    toCart: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
}
.product-item {
  width: 300px;
  height: 545px;
  box-sizing: border-box;
  margin-left: 20px;
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #000000;
  box-shadow: 4px 4px 11px rgba(0, 0, 25, 0.5);
}
.cart-list {
  justify-content: space-around;
}
.cart-item {
  width: 100%;
  height: 250px;
}
</style>