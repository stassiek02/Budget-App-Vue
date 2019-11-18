<template>
  <li :class="{income : item.type == 'inc',expanse : item.type == 'exp'}">
    <p>{{item.description}}</p>
    <p>
      <span v-if="item.type === 'inc'">+</span>
      <span v-else>-</span>
      {{item.value}}
    </p>
  </li>
</template>

<script>
export default {
  name: "BudgetItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
li {
  padding: 13px;
  border-bottom: 1px solid #e7e7e7;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

    &:nth-of-type(2n){
        background-color: #f2f2f2f2;
    }

}   
.income{
    color:yellowgreen;
}
.expanse{
    color: orangered;
}
</style>