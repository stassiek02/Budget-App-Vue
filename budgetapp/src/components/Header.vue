<template>
  <div class="header">
    <h2>Total balance:{{balance}}</h2>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    balance: {
      type: Number,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100vw;
  height: 30vh;
  background-size: cover;
  background-image: url("../assets/header.jpg");
  background-position: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  h2 {
    color: white;
  }
}
</style>
