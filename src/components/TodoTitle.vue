<template>
  <div class="title">
    <p class="title_message">{{ checkHour }}</p>
    <p class="title_task">You've got</p>
    <span class="title_task-total">
      <em class="title__task-left">{{ propsdata.left }}</em>
      <em v-if="propsdata.total" class="title__task-total">
        &nbsp;/ {{ propsdata.total }}</em
      >
    </span>
    <p class="title__task-bottom">tasks today !</p>
    <span class="title__task-info"></span>
  </div>
</template>

<script setup>
console.log("TodoTitle.vue");
</script>
<script>
export default {
  props: ["propsdata"],
  data() {
    return {
      message: "Good morning, ",
    };
  },
  computed: {
    checkHour() {
      let msg = "";
      let nick = this.propsdata.nick;
      var date = new Date();
      const now = date.getHours();
      if (now < 12) {
        msg = "Good morning, ";
      } else if (now >= 12 && now < 18) {
        msg = "Good afternoon, ";
      } else if (now >= 18 && now < 23) {
        msg = "Good evening, ";
      } else {
        msg = "Good night, ";
      }
      // console.log(msg);
      return msg + nick;
    },
  },
  methods: {
    mounted() {
      this.message = this.checkHour();
    },
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
  .title_task {
    font-size: 1.5em;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 10px;
    text-shadow: 1px 1px 1px black;
    padding: 0.3em 0 0.3em 0;
  }
  .title__task-bottom {
    word-break: break-all;
    font-size: 1.5em;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 10px;
    padding: 0.3em 0 0.3em 0;
    text-shadow: 1px 1px 1px black;
  }
  .title__task-left {
    font-size: 3.5em;
    font-weight: 600;
    text-shadow: 2px 2px 4px black;
  }
  .title__task-total {
    font-size: 1.5em;
    font-weight: 600;
    text-shadow: 2px 2px 4px black;
  }
}
</style>
