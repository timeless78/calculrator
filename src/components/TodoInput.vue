<template>
  <div class="add">
    <input
      type="text"
      class="add__input"
      placeholder="Enter your task here"
      v-model="newTodoItem"
      v-on:keypress.enter="addTodoItem"
    />
    <button class="add__button icon-right-small"></button>
  </div>
</template>

<script setup>
console.log("TodoInput.vue");
</script>
<script>
export default {
  data() {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodoItem: function () {
      if (this.newTodoItem !== "") {
        this.$emit("addItem", this.newTodoItem);
        this.clearInput();
      }
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
};
</script>
<style lang="scss" scoped>
.add {
  .add__input {
    display: inline-block;
    margin: 2em auto;
    height: 2.5em;
    width: 100%;
    color: white;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50px;
    border: 0px;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
  }
  .add__input::placeholder {
    color: white;
    padding-left: 1em;
    font-family: "Noto Sans", sans-serif;
    font-size: small;
    font-weight: 200;
  }
  .add__button {
    border: 0;
    padding: 5px;
    border-radius: 100%;
    margin-left: -45px;
    color: gray;
  }
}
</style>
