<template>
  <div class="product-card">
    <img :src="product.src" :alt="product.dish" class="product-image" />
    <div>
      <p class="product-price">{{ product.price }} &#8381;</p>
      <p class="product-favorite"></p>
    </div>
    <p class="product-name">{{ product.dish }}</p>
    <button v-if="isInCart" class="product-btn" disabled>В корзине</button>
    <button v-else class="product-btn" @click="addToCart">В корзину</button>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      isInCart: false,
    };
  },
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  created() {},
  computed: {},
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product);
      this.isInCart = true;
    },
  },
};
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-image {
  width: 100%;
}

.product-price {
  font-size: 20px;
  font-weight: 700;
}
.product-name {
  font-size: 22px;
}
.product-btn {
  padding: 12px 16px;
  border: none;
  background-color: rgba(37, 56, 210, 0.8);
  color: #ffffff;
  font-size: 18px;
}
.product-btn:hover:enabled {
  background-color: rgba(37, 56, 210, 1);
}
</style>
