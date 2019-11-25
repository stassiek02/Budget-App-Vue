<template>
  <div class="listWrapper">
    <ul>
      <BudgetItem v-for="item in list" :key="item.description" :id="item.description" :item="item" />
    </ul>
  </div>
</template>

<script>
import BudgetItem from "./BudgetItem";
export default {
  name: "BudgetList",
  components: {
    BudgetItem
  },
  computed: {
    list() {
      return this.$store.getters.getList;
    }
  }
};
</script>

<style scoped>
.listWrapper {
  max-width: 800px;
  margin: 0 auto;
  list-style: none;
  padding: 0;
}
</style>