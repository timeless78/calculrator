<template>
  <div class="controller">
    <div class="select">
      <label for="order">Order</label>
      <select name="order" id="order" class="selectbox">
        <option value="date-asc">Date Ascending</option>
        <option value="date-desc">Date Descending</option>
        <option value="name-asc">Name Ascending</option>
        <option value="name-desc">Name Descending</option>
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
      Hello: 0,
    };
  },
  methods: {
    clearTodo: function () {
      localStorage.clear();
    },
  },
};
</script>

<style lang="scss">
.controller {
  display: inline;
  color: rgba(0, 0, 0, 0.65);
  margin-bottom: 1em;
  vertical-align: top;
  line-height: 28px;

  .select {
    display: inline-block;

    label {
      display: none;
    }

    .selectbox {
      color: inherit;
      font-size: medium;
      font-weight: 400;
    }
  }

  .clear {
    display: block;
    font-size: small;
    font-weight: bold;
    text-align: right;
    float: right;
    border: 0px;
    color: rgba(0, 0, 0, 0.3);
    background-color: inherit;
    transition: transform 0.1s;
  }
  .clear:active {
    transform: translateX(1px) translateY(1px);
  }
}
</style>
