<template>
  <div id="app">
    <div class="top">
      <TodoHeader></TodoHeader>
      <div v-if="userName">
        <TodoTitle v-bind:propsdata="checkCount"></TodoTitle>
        <TodoInput
          v-on:addItem="addNewTodoItem"
          v-on:alert="showModal"
        ></TodoInput>
      </div>
      <div v-else>
        <TodoGreeding v-on:addUser="setupUser" />
      </div>
    </div>
    <div class="body">
      <TodoController
        v-on:clearItem="clearTodos"
        v-on:sortItem="sortList"
      ></TodoController>
      <TodoList
        v-bind:propsdata="todoList"
        v-on:toggleItem="toggleComplete"
        v-on:removeItem="removeTodo"
      ></TodoList>
      <TodoFooter></TodoFooter>
    </div>
    <AlertModal v-show="modalVisible" v-on:close="modalVisible = false">
      <template v-slot:modal-text>{{ modalContext }}</template>
    </AlertModal>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoTitle from "./components/TodoTitle.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoGreeding from "./components/TodoGreeding.vue";
import TodoController from "./components/TodoController.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
import getDate from "./components/common/getDate.js";
import AlertModal from "./components/common/AlertModal.vue";

export default {
  data() {
    return {
      todoList: [],
      userName: "nana",
      modalVisible: false,
      modalContext: "",
    };
  },
  components: {
    TodoHeader,
    TodoTitle,
    TodoInput,
    TodoGreeding,
    TodoController,
    TodoList,
    TodoFooter,
    AlertModal,
  },
  created() {
    this.userName = localStorage.getItem("userName");

    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; ++i) {
        // console.log(localStorage.key(i));
        if (localStorage.key(i) === "userName") {
          continue;
        }
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
        nick: this.userName,
      };
      return count;
    },
  },
  methods: {
    setupUser(arg) {
      // console.log(arg);
      this.userName = arg;
      localStorage.setItem("userName", arg);
    },
    showModal(text) {
      this.modalVisible = !this.modalVisible;
      this.modalContext = text;
    },
    addNewTodoItem(todoItem) {
      var value = {
        item: todoItem,
        date: `${getDate().date}/${getDate().week}`,
        time: getDate().time,
        completed: false,
      };
      localStorage.setItem(todoItem, JSON.stringify(value));
      this.todoList.push(value);
      // this.showModal("The form is empty. Please enter your task.");
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
    sortAsc() {
      this.todoList.sort(function (a, b) {
        return b.time - a.time;
      });
    },
    sortDesc() {
      this.todoList.sort((a, b) => {
        return b.time - a.time;
      });
    },
    sortList: function (eventVal) {
      if (eventVal === "sortTodoLatest") {
        this.sortDesc();
      } else if (eventVal === "sortTodoOldest") {
        this.sortAsc();
      }
    },
  },
};
</script>

<style lang="scss">
@import "./assets/styles/reset.scss";
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400&display=swap");

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: "Noto Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;

  .top {
    width: 100%;
    min-height: 43.6em;
    padding: 0 $padding 4.5em;
    background: linear-gradient(145deg, #3770cc 20%, #ce91c9 84%);
    //   to bottom right,
    //   cornflowerblue,
    //   rgb(220, 139, 236)
    // );
  }
  .body {
    padding: 3em $padding;
  }
}
</style>
