<template>
  <div id="app">
    <Header msg="Welcome to Your Vue.js App" :balance="balance" />
    <div class="wrapper">
      <p></p>
      <InputForm @add-New="addNew" />
      <ul v-for="item in list" :key="item.value">
        <li>{{ item.description }} {{ item.value }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import Header from "./components/Header.vue";
import InputForm from "./components/InputForm";
import { parse } from 'path';

export default {
  name: "app",
  components: {
    Header,
    InputForm
  },
  data() {
    return {
      list: [],
      balance: 0
    };
  },
  methods: {
    addNew(e) {
      console.log(e);
      this.list.push(e);

      this.calculateBalance()
    },
    calculateBalance() {
      let totalBalance = this.list.reduce(function(acc, item) {
        if (item.type === "inc") {
          return acc + parseFloat(item.value);
        } else {
          return acc - parseFloat(item.value);
        }
      }, 0);
     return this.balance = totalBalance;
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
.wrapper {
  margin: 0 auto;
}
</style>
