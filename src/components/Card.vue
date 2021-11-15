<template>
  <div>
    <img :src="imgPath" :alt="product.dish" />
    <div>
      <p class="price">{{ randomNumber(minPrice, maxPrice) }} &#8381;</p>
      <p class="favorite"></p>
    </div>
    <p class="name">{{ product.dish }}</p>
    <button class="btn">Купить</button>
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
const path = "@/assets/images/";

export default {
  name: "Card",
  data() {
    return {
      path,
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
      return require(`${this.path}${
        this.images[this.randomNumber(this.firstNumber, this.lastNumber)]
      }.webp`);
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

<style scoped></style>
