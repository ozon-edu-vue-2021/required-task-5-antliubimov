<template>
  <div class="product-card">
    <img :src="fullPath" :alt="product.dish" class="product-image" />
    <div>
      <p class="product-price">
        {{ randomNumber(minPrice, maxPrice) }} &#8381;
      </p>
      <p class="product-favorite"></p>
    </div>
    <p class="product-name">{{ product.dish }}</p>
    <button class="product-btn">Купить</button>
  </div>
</template>

<script>
const images = [
  6123150777, 6126039472, 6126040354, 6128597660, 6134992334, 6136170572,
  6136172483, 6140906765, 6142673815, 6142681673, 6142683276, 6148226736,
];
const FIRST_IMG_NUMBER = 0;
const LAST_IMG_NUMBER = images.length - 1;
const MIN_PRICE = 0;
const MAX_PRICE = 1000;

export default {
  name: "Card",
  data() {
    return {
      images,
      firstNumber: FIRST_IMG_NUMBER,
      lastNumber: LAST_IMG_NUMBER,
      minPrice: MIN_PRICE,
      maxPrice: MAX_PRICE,
    };
  },
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  created() {},
  computed: {
    imgPath() {
      return `${
        this.images[this.randomNumber(this.firstNumber, this.lastNumber)]
      }.webp`;
    },
    fullPath() {
      return require("@/assets/images/" + this.imgPath);
    },
  },
  methods: {
    randomNumber(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    },
  },
};
</script>

<style scoped>
.product-card {
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
.product-btn:hover {
  background-color: rgba(37, 56, 210, 1);
}
</style>
