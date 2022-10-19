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
      <button class="hello__button">
        <span class="blind">Enter</span>
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
  position: relative;
  max-width: $max-width;
  margin: 0 auto;

  &__input {
    @include animation(fadeShow, 800ms, 1, 900ms);
  }
}
</style>
