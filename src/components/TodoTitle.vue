<template>
  <div class="title">
    <p class="title_message">{{ message }}</p>
    <p>You've got</p>
    <span class="title_task-total">{{ taskTotal }}</span>
    <p>tasks today !</p>
  </div>
</template>

<script setup>
console.log("TodoTitle.vue");
</script>
<script>
export default {
  data() {
    return {
      message: "Good morning, nana!",
      taskTotal: 5,
    };
  },
};
</script>

<style lang="scss">
.title {
  max-width: $max-width;
  margin: 0 auto;

  .title_message {
    text-align: left;
    font-size: 1.6em;
    padding: 1em 0em 2em 0em;
  }
  p:nth-child(2) {
    word-break: break-all;
    font-size: 1.5em;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 10px;
    text-shadow: 1px 1px 1px black;
    padding: 0.3em 0 0.3em 0;
  }
  p:nth-child(4) {
    word-break: break-all;
    font-size: 1.5em;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 10px;
    padding: 0.3em 0 0.3em 0;
    text-shadow: 1px 1px 1px black;
  }
  .title_task-total {
    font-size: 3.5em;
    font-weight: 600;
    text-shadow: 2px 2px 4px black;
  }
}
</style>
