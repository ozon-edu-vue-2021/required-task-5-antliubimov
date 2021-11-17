<template>
  <div class="product-card">
    <img :src="product.src" :alt="product.dish" class="product-image" />
    <div class="product-desc">
      <p class="product-price">{{ product.price }} &#8381;</p>
      <button
        v-if="product.favorite"
        class="product-favorite-btn"
        @click="favoriteToggle"
      >
        ❤️
      </button>
      <button v-else class="product-favorite-btn" @click="favoriteToggle">
        &#128420;
      </button>
    </div>
    <p class="product-name">{{ product.dish }}</p>
    <div class="product-count">
      <label for="product-count">Количество: </label>
      <input
        type="number"
        id="product-count"
        min="1"
        max="100"
        :value="product.count"
        @change="changeCount"
      />
    </div>
    <button
      @click="$router.push('cart')"
      v-if="isInCart"
      class="btn product-btn-incart"
    >
      В корзине
    </button>
    <button v-else class="btn product-btn" @click="addToCart">В корзину</button>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    isInCart() {
      return this.$store.state.order.find((elem) => {
        if (elem.id === this.product.id) {
          return true;
        }
      });
    },
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product);
    },
    changeCount(e) {
      this.product.count = +e.target.value;
    },
    favoriteToggle() {
      this.$store.commit("favoriteToggle", this.product);
    },
  },
};
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.product-image {
  width: 100%;
}
.product-desc {
  display: flex;
  justify-content: space-between;
}

.product-price {
  font-size: 20px;
  font-weight: 700;
}
.product-favorite-btn {
  font-size: 24px;
  border: none;
  background: none;
  cursor: pointer;
}
.product-name {
  font-size: 22px;
}
.product-count {
  margin-bottom: 20px;
}
.btn {
  padding: 12px 16px;
  border: none;
  color: #ffffff;
  font-size: 18px;
}
.product-btn {
  background-color: rgba(37, 56, 210, 0.8);
}
.product-btn:hover:enabled {
  background-color: rgba(37, 56, 210, 1);
}

.product-btn-incart {
  background-color: rgb(37, 210, 98);
}
</style>
