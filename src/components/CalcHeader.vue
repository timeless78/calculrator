<template>
  <div class="header">
    <div class="logo">
      <span class="logo__title icon-calc">Calculator</span>
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
@import "@/assets/fontello/css/fontello.css";

.header {
  max-width: $max-width;
  margin: 0em auto;
  //border: 1px solid #aaa4a4;
  box-shadow: 1px 0px 1px rgb(85, 85, 85);
  @include flexbox;
  @include align-items(center);
  @include justify-content(space-between);

  .logo {
    width: 10em;
    background-size: 100%;

    &__title {
      letter-spacing: 0.1em;
      color: whitesmoke;
      font-size: 1.2em;
    }
  }

  &__date {
    color: whitesmoke;
    letter-spacing: 0.1em;
    font-size: 1.2em;
    background-position: 50% 50%;
  }
}
</style>
