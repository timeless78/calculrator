<template>
  <div id="header">
    <h1 class="logo">
      <span class="blind">MyTodo</span>
    </h1>
    <p class="header__date">{{ timestamp }}</p>
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

<style lang="scss">
#header {
  max-width: $max-width;
  margin: 0em auto;
  padding: 1em 0 1em 0;
  color: #fff;
  @include flexbox;
  @include align-items(center);
  @include justify-content(space-between);

  &__date {
    letter-spacing: 0.02em;
    font-size: 1.2em;
  }
}

.logo {
  width: 5.8em;
  height: 1.6em;
  background-size: 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: icon("logo", "ffffff");
}
</style>
