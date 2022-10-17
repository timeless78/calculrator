<template>
  <div id="header">
    <h1 class="logo">My Todo</h1>
    <p class="date">{{ timestamp }}</p>
  </div>
</template>
<script setup>
console.log("TodoHeader.vue");
</script>
<script>
import getDate from "./common/getDate.js";
export default {
  data() {
    return {
      timestamp: "",
    };
  },
  created() {
    this.timestamp = `${getDate().month}/${getDate().date} ${getDate().week}`;
  },
};
</script>

<style lang="scss" scoped>
#header {
  margin: 0em;
  padding: 1em 0 1em 0;
  vertical-align: top;
  font-size: small;
  font-weight: 200;
  line-height: 28px;

  .logo {
    font-size: medium;
    font-weight: 400;
    display: inline-block;
  }
  .date {
    text-align: right;
    padding-right: 2em;
    float: right;
  }
}
</style>
