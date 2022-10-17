<template>
  <div>
    <ul class="list">
      <li
        class="list__item"
        v-for="todoItem in todoItems"
        v-bind:key="todoItem"
      >
        <input
          type="checkbox"
          v-bind:id="todoItems.item"
          v-bind:checked="todoItem.completed === true"
          v-on:change="toggleComplete(todoItem)"
        />
        <label v-bind:for="todoItems.item" class="list__label">
          <p class="list__text">{{ todoItem.item }}</p>
        </label>
        <p class="list__date">{{ todoItem.date }}</p>
        <button class="list__delete>" v-on:click="removeTodo(todoItem, index)">
          x
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
console.log("TodoList.vue");
</script>
<script>
export default {
  data() {
    return {
      todoItems: [],
    };
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; ++i) {
        // console.log(localStorage.key(i));
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  },
  methods: {
    toggleComplete: function (todoItem) {
      todoItem.completed = !todoItem.completed;
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    removeTodo: function (todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  //   border: 1px solid red;
  margin-top: 1em;

  .list__item {
    color: black;
    background-color: whitesmoke;
    display: inline-block;
    margin-bottom: 0.5em;
    width: 100%;
    line-height: 50px;
    border-radius: 10px;
    box-shadow: 1px 1px 1px gray;

    input {
      align-items: center;
      margin-top: 15px;
      margin-left: 15px;
      text-align: left;
      float: left;
      width: 20px;
      height: 20px;
    }
    label {
      margin-left: 20px;
      text-align: left;
      float: left;
      font-size: 1.3em;
      font-weight: bold;
    }
    p:nth-child(3) {
      float: right;
      transform: translateX(-7px) translateY(15px);
      font-size: 10px;
      font-weight: 100;
    }
    button {
      margin: 0.2em;
      border: 0px;
      color: rgba(0, 0, 0, 0.5);
      transform: translateX(20px) translateY(5px);
      text-align: right;
      float: right;
      transition: transform 0.1s;
    }
    button:hover {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 5px;
    }
    button:active {
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 5px;
      transform: translateX(22px) translateY(6px);
    }
  }
}
</style>
