<template>
  <li :class="{income : item.type == 'inc',expanse : item.type == 'exp'}">
    <p>{{item.description}}</p>
    <p>
      <span v-if="item.type === 'inc'">+</span>
      <span v-else>-</span>
      {{item.value}} PLN
      <button class="btn--delete" @click="$emit('delete-item')">&times;</button>
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
  &:nth-of-type(2n) {
    background-color: #f2f2f2f2;
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
</style>