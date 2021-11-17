<template>
  <div id="app">
    <ul id="nav">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/cart">Перейти в корзину</router-link>
      </li>
      <li>
        <router-link to="/favorites">Перейти в избранное</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  created() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

* {
  box-sizing: border-box;
}

#nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  list-style: none;
}
#nav a {
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
  color: #000000;
}
#nav a:active,
#nav a:focus,
#nav a:hover {
  color: #2538d2;
}
</style>
