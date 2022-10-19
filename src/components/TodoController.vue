<template>
  <div class="controller">
    <div class="select">
      <label for="order">Order</label>
      <select
        name="order"
        id="order"
        class="selectbox"
        v-model="selected"
        v-on:change="sortTodoList"
      >
        <option value="date-asc">Oldest</option>
        <option value="date-desc">Latest</option>
      </select>
    </div>
    <button class="clear" v-on:click="clearTodo">Clear All</button>
  </div>
</template>

<script setup>
console.log("TodoController.vue");
</script>

<script>
export default {
  date() {
    return {
      selected: "date-asc",
    };
  },
  methods: {
    clearTodo: function () {
      this.$emit("clearItem");
    },
    sortTodoList: function () {
      // 선택된 값에 따라 아이템 정렬
      if (this.selected === "date-desc") {
        this.$emit("sortItem", "sortTodoLatest");
      } else if (this.selected === "date-asc") {
        this.$emit("sortItem", "sortTodoOldest");
      }
      // this.$emit("sortItem", selected.target.value);
    },
  },
};
</script>

<style lang="scss">
.controller {
  max-width: $max-width;
  padding: 1em 0 1em 0;
  @include flexbox;
  @include align-items(center);
  @include justify-content(space-between);

  label {
    display: none;
  }

  .clear {
    letter-spacing: 0.03em;
    font-size: 1.4em;
    color: #ababab;
    transition: color transform 0.2s;
    text-shadow: 1px 1px 1px black;

    &:active {
      color: black;
      transform: translateX(1px) translateY(1px);
      text-shadow: 0px 0px 0px black;
    }
  }
}
.selectbox {
  display: block;
  width: 9.2rem;
  height: 3rem;
  padding: 0.5rem 1rem;
  font-size: 1.4rem;
  color: #747474;
  border: solid 1px #cbcbcb;
  background-color: #ffffff;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 0;
  outline: 0;
  background-position: right 0.8rem top 55%;
  background-size: 1.15rem 1.15rem;
  background-image: icon("tri", "717171");
  background-repeat: no-repeat;
  cursor: pointer;
  transition: border 0.2s;
  &:hover {
    border-color: #a9a9a9;
  }
}
</style>
