<template>
  <div id="app">
    <Header/>
    <div class="wrapper">
      <InputForm />
      <BudgetList />
      <!-- <ul class="listWrapper">
        <BudgetItem
          :item="item"
          v-for="(item, index) in list"
          :key="item.description"
          :id="item.description"
          v-on:delete-item="deleteThisItem(index)"
        />
      </ul> -->
    </div>
    <div
      @click="installer()"
      class="btn--install"
      :style="{ display: installBtn }"
    >
      Install
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import Header from "./components/Header.vue";
import InputForm from "./components/InputForm";
import BudgetList from "./components/BudgetList";
export default {
  name: "app",
  components: {
    Header,
    InputForm,
    BudgetList
  },
  data() {
    return {
      installBtn: "none",
      installer: undefined
    };
  },
  created() {
    let installPrompt;

    window.addEventListener("beforeinstallprompt", e => {
      e.preventDefault();
      installPrompt = e;
      this.installBtn = "block";
    });

    this.installer = () => {
      this.installBtn = "none";
      installPrompt.prompt();
      installPrompt.userChoice.then(result => {
        if (result.outcome === "accepted") {
          console.log("Install accepted!");
        } else {
          console.log("Install denied!");
        }
      });
    };
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
}
#app {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
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

.btn--install {
  position: absolute;
  bottom: 10px;
  left: 50%;
  padding: 10px;
  cursor: pointer;
  border: 1px solid orangered;
  transform: translateX(-50%);
}
</style>
