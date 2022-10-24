<template>
  <div class="header">
    <div class="logo">
      <span class="blind">Calculator</span>
    </div>
    <div class="header__date">
      <span>10/21/Mon</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.header {
  max-width: $max-width;
  margin: 0em auto;
  @include flexbox;
  @include align-items(center);
  @include justify-content(space-between);

  &__date {
    letter-spacing: 0.02em;
    font-size: 1.2em;
    background-position: 50% 50%;
  }
}

.logo {
  width: 5.8em;
  height: 1.6em;
  background-size: 100%;
  background-color: blue;
}
</style>
