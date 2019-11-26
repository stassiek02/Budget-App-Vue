<template>
  <div class="listWrapper">
    <ul>
      <h3>Incomes</h3>
      <BudgetItem
        v-for="item in incList"
        :key="item.description"
        :id="item.description"
        :item="item"
      />
    </ul>
    <ul>
      <h3>Expanses</h3>
      <BudgetItem
        v-for="item in expList"
        :key="item.description"
        :id="item.description"
        :item="item"
      />
    </ul>
  </div>
</template>

<script>
import BudgetItem from "./BudgetItem";
import { mapGetters,mapState } from "vuex";
export default {
  name: "BudgetList",
  components: {
    BudgetItem
  },
  computed: mapState(['incList','expList']),
  
};
</script>

<style scoped lang="scss">
.listWrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
  list-style: none;
  padding: 0;

  ul {
    padding: 0;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;

    ul {
      margin: 0;
      padding: 0 10px;
    }
  }
}
h3 {
  margin: 20px;
}
</style>
