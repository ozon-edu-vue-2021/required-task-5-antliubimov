<template>
  <div class="product-card">
    <img :src="product.src" :alt="product.dish" class="product-image" />
    <div class="product-description">
      <p class="product-name">{{ product.dish }}</p>
      <div>
        <p class="product-price">{{ product.price }} &#8381;</p>
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
      </div>
      <button class="btn product-btn" @click="deleteProduct">Удалить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartCard",
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    deleteProduct() {
      this.$store.commit("deleteProduct", this.product);
    },
    changeCount(e) {
      this.product.count = +e.target.value;
    },
  },
};
</script>

<style scoped>
.product-card {
  display: flex;
}
.product-image {
  width: 150px;
  height: auto;
  object-fit: contain;
  margin-right: 20px;
}
.product-description {
  display: flex;
  flex-direction: column;
}
.product-name {
  margin: 10px 0;
  font-size: 24px;
  font-weight: 700;
}
.product-price {
  font-size: 20px;
  font-weight: 600;
}
.product-count {
  margin-bottom: 20px;
}
.product-btn {
  padding: 12px 16px;
  border: none;
  color: #ffffff;
  font-size: 18px;
  background-color: rgba(37, 56, 210, 0.8);
}
.product-btn:hover {
  background-color: rgba(37, 56, 210, 1);
}
</style>
