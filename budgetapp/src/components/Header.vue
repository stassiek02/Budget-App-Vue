<template>
  <div class="header">
    <h2>Available Budget in {{ getDate }}:</h2>
    <span>{{ calculateBalance }} PLN</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
  computed: {
    calculateBalance() {
      return this.getTotalInc - this.getTotalExp;
    },
    getDate() {
      let newDate = new Date();
      let Year = newDate.getFullYear();
      let Month = newDate.getMonth() + 1;
      return `${Month}.${Year}`;
    },
    ...mapGetters(["getTotalInc", "getTotalExp"])
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100vw;
  height: 30vh;
  background-size: cover;
  background-image: url("../assets/header.jpg");
  background-color: rgba(0, 0, 0, 0.3);
  background-blend-mode: darken;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  h2 {
    color: white;
    font-weight: 200;
    letter-spacing: 1px;
  }
  span {
    font-size: 50px;
    margin-top: 20px;
    color: white;
  }
}
</style>
