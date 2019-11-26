<template>
  <li :class="{ income: item.type == 'inc', expanse: item.type == 'exp' }">
    <p>{{ item.description }}</p>
    <p>
      <span v-if="item.type === 'inc'">+</span>
      <span v-else>-</span>
      {{ item.value }} PLN
      <button class="btn--delete" @click="deleteItem(id,item.type)">&times;</button>
    </p>
  </li>
</template>

<script>
import { stringify } from "querystring";
export default {
  name: "BudgetItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    deleteItem(id,type) {
      this.$store.commit("deleteItem", { property: `${[type]}List`, with: id });
    }
  }
};
</script>

<style lang="scss" scoped>
li {
  padding: 13px 100px;
  border-bottom: 1px solid #e7e7e7;
  width: calc(100%-2 * 100);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  animation-name: fadeIn;
  animation-duration: .2s;
  &:nth-of-type(2n) {
    background-color: #f2f2f2f2;
  }
  @media (max-width: 900px) {
    padding: 13px 25px;
  }
}
.income {
  color: yellowgreen;
}
.expanse {
  color: orangered;
}
.btn--delete {
  font-size: 20px;
  background-color: transparent;
  border: none;
  position: absolute;
  right: 0;
  top: 10px;
  cursor: pointer;
}
@keyframes fadeIn{
  from{
    opacity: 0;
    transform: translateY(-50px);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
