<template>
  <div class="header">
    <h2>Available Budget in {{getDate}}:</h2>
    <span>{{balance}} PLN</span>
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
  },
  computed: {
    getDate(){
      let newDate = new Date();
      let Year = newDate.getFullYear();
      let Month = newDate.getMonth()+1;
      return `${Month}.${Year}`
    }
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100vw;
  height: 30vh;
  background-size: cover;
  background-image: url("../assets/header.jpg");
  background-color: rgba(0,0,0,.3);
  background-blend-mode: darken;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  h2 {
    color: white;
    font-weight: 200;
    letter-spacing: 1px
  }
  span{
    font-size: 50px;
    margin-top: 20px;
    color:white;
  }
}
</style>
