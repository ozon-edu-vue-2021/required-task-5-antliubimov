<template>
  <div>
    <h2>Корзина</h2>
    <div class="wrapper">
      <ul v-if="cartList.length" class="cart-list">
        <li v-for="product in cartList" :key="product.id" class="cart-item">
          <Card :product="product" :toCart="true"/>
        </li>
      </ul>
      <h3 v-else>Корзина пуста</h3>
      <div class="cart-total">
        <h4>Ваш заказ</h4>
        <p>Общая сумма: {{ totalPrice }} &#8381;</p>
        <p>Общее количество: {{ totalAmount }}</p>
        <button class="btn" @click="buyProducts">Оформить</button>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "Cart",
  components: {
    Card,
  },
  computed: {
    cartList() {
      return this.$store.state.order;
    },
    totalAmount() {
      return this.$store.getters.totalAmount;
    },
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
  },
  methods: {
    buyProducts() {
      const text = this.cartList
        .map(
          (elem) =>
            `Наименование: ${elem.dish}, Количество: ${elem.count}, Цена на шт. ${elem.price}`
        )
        .join(" ;");
      const result = `Ваш заказ:
        ${text}
        Общая сумма: ${this.totalPrice}
        Общее количество: ${this.totalAmount}
      `;
      alert(result);
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 20px;
  width: 900px;
}
.cart-total {
  display: flex;
  flex-direction: column;
  height: 300px;
  padding: 20px;
  background-color: #bbbfc9;
}
.cart-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
}
.cart-item {
  width: 100%;
  height: 250px;
  box-sizing: border-box;
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #000000;
  box-shadow: 4px 4px 11px rgba(0, 0, 25, 0.5);
}
.btn {
  padding: 12px 16px;
  border: none;
  color: #ffffff;
  font-size: 18px;
  background-color: rgba(37, 56, 210, 0.8);
}
.btn:hover:enabled {
  background-color: rgba(37, 56, 210, 1);
}
</style>
