<template>
  <div class="calcScreen">
    <div class="calcScreen__view">
      <textarea name="screen" id="screen" cols="30" rows="10"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resultText: "0",
    };
  },
};
</script>

<style lang="scss">
.calcScreen {
  max-width: 768px;
}
</style>
