<template>
  <div class="add">
    <div class="main-input">
      <input
        type="text"
        class="add__input"
        placeholder="Enter your task here"
        v-model="newTodoItem"
        v-on:keypress.enter="addTodoItem"
      />
      <button class="add__button" v-on:click="addTodoItem">
        <span class="blind">Add</span>
      </button>
    </div>
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
      } else {
        this.$emit("alert", "Please note a new todo!");
      }
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
};
</script>
<style lang="scss">
.add {
  position: relative;
  max-width: $max-width;
  margin: 0 auto;

  .main-input {
    @include animation(fadeShow, 850ms, 1, 1100ms);
  }
}
</style>
