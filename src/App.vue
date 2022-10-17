<template>
  <div>
    <div class="top-content">
      <TodoHeader></TodoHeader>
      <TodoTitle v-bind:propsdata="checkCount"></TodoTitle>
      <TodoInput v-on:addItem="addNewTodoItem"></TodoInput>
    </div>
    <div class="bottom-content">
      <TodoController v-on:clearItem="clearTodos"></TodoController>
      <TodoList
        v-bind:propsdata="todoList"
        v-on:toggleItem="toggleComplete"
        v-on:removeItem="removeTodo"
      ></TodoList>
      <TodoFooter></TodoFooter>
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoTitle from "./components/TodoTitle.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoController from "./components/TodoController.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
import getDate from "./components/common/getDate.js";

export default {
  name: "App",
  data() {
    return {
      todoList: [],
    };
  },
  components: {
    TodoHeader,
    TodoTitle,
    TodoInput,
    TodoController,
    TodoList,
    TodoFooter,
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; ++i) {
        // console.log(localStorage.key(i));
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoList.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  },
  computed: {
    checkCount() {
      const checkLeftItems = () => {
        let leftCount = 0;
        for (let i = 0; i < this.todoList.length; ++i) {
          if (this.todoList[i].completed === false) {
            leftCount++;
          }
        }
        return leftCount;
      };

      const count = {
        total: this.todoList.length,
        left: checkLeftItems(),
      };
      return count;
    },
  },
  methods: {
    addNewTodoItem(todoItem) {
      var value = {
        item: todoItem,
        date: `${getDate().date}/${getDate().week}`,
        time: getDate().time,
        completed: false,
      };
      localStorage.setItem(todoItem, JSON.stringify(value));
      this.todoList.push(value);
    },
    toggleComplete: function (todoItem) {
      todoItem.completed = !todoItem.completed;
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    removeTodo: function (todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoList.splice(index, 1);
    },
    clearTodos: function () {
      this.todoList = [];
      localStorage.clear();
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400&display=swap");

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: "Noto Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;

  .top-content {
    background: linear-gradient(
      to bottom right,
      cornflowerblue,
      rgb(220, 139, 236)
    );
    margin: 0;
    padding: 0em 1em;
    padding-bottom: 1em;
  }
  .bottom-content {
    max-height: $max-height;
    background-color: gainsboro;
    margin: 0em;
    padding: 1em;
  }
}
</style>
