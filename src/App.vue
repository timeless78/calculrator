<template>
  <div id="mainframe">
    <div class="top">
      <CalcHeader />
      <div class="top__view">
        <CalcScreen />
      </div>
    </div>
    <div class="bottom">
      <CalcPad />
      <CalcFooter />
    </div>
  </div>
</template>

<script>
import CalcHeader from "./components/CalcHeader.vue";
import CalcScreen from "./components/CalcScreen.vue";
import CalcPad from "./components/CalcPad.vue";
import CalcFooter from "./components/CalcFooter.vue";

export default {
  components: {
    CalcHeader,
    CalcScreen,
    CalcPad,
    CalcFooter,
  },
};
</script>

<style lang="scss">
@import "./assets/styles/reset.scss";
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400&display=swap");

#mainframe {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: "Noto Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  margin: 2em auto;
}
.top {
  width: $max-width;
  // padding: 0 $padding 4.5rem;
  background-color: #61676d;
  // border: 3px solid black;

  &__view {
    height: 15rem;
  }
}
.bottom {
  width: $max-width;
  height: $pad-height;
  // padding: 0rem $padding;
  background-color: #ada9a9;
  // border: 3px solid black;
}
</style>
