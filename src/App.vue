<template>
  <div>
    <div class="top-content">
      <TodoHeader></TodoHeader>
      <TodoTitle user="nana"></TodoTitle>
      <TodoInput></TodoInput>
    </div>
    <div class="bottom-content">
      <TodoController></TodoController>
      <TodoList></TodoList>
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

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoTitle,
    TodoInput,
    TodoController,
    TodoList,
    TodoFooter,
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
