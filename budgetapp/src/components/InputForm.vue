<template>
  <form @submit.prevent="handleSubmit">
    <select v-model="item.type">
      <option value="inc" selected="selected">+</option>
      <option value="exp">-</option>
    </select>
    <input
      type="text"
      placeholder="Add description"
      class="input input--description"
      v-model="item.description"
    />
    <input
      type="number"
      placeholder="Add Value"
      class="input input--value"
      v-model="item.value"
      min="0"
      step="any"
    />
    <button class="btn btn--inc">Add</button>
  </form>
</template>

<script>
export default {
  name: "InputForm",
  data() {
    return {
      item: {
        description: "",
        value: 0,
        type: "inc"
      }
    };
  },
  methods: {
    handleSubmit() {
      if (this.item.value && this.item.description.length > 0) {
        this.item.value = parseInt(this.item.value, 10);
        let newItem = new Object({
          description: this.item.description,
          value: this.item.value,
          type: this.item.type
        });
        if (newItem.type === "inc") {
          this.$store.commit("change", { property: "incList", with: newItem });
        } else if (newItem.type === "exp") {
          this.$store.commit("change", { property: "expList", with: newItem });
        }

        this.clearInputs();
      }
    },
    clearInputs() {
      this.item.description = "";
      this.item.value = 0;
      this.item.type = "inc";
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  padding: 20px;
  background-color: #f2f2f2f2;
  @media (max-width: 550px) {
    padding: 20px 0;
  }
}
select {
  width: 55px;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  height: 44px;
  font-size: 18px;
  color: inherit;
  background-color: #fff;
  margin-right: 10px;
  font-weight: 300;
  border-radius: 5px;
  transition: border 0.3s;
  @media (max-width: 550px) {
    margin: 0;
  }
}
input {
  border: 1px solid #e7e7e7;
  background-color: #fff;
  color: inherit;
  font-family: inherit;
  font-size: 14px;
  padding: 12px 15px;
  margin-right: 10px;
  border-radius: 5px;
  transition: border 0.3s;
  @media (max-width: 550px) {
    margin: 0;
  }
}
button {
  color: white;
  border: 1px solid #e7e7e7;
  padding: 12px 15px;
  background-color: #27ae60;
  border-radius: 5px;
  @media (max-width: 550px) {
    margin: 0;
  }
}
</style>
