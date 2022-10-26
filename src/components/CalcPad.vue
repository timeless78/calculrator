<template>
  <div class="pads">
    <div class="pads-buttons">
      <table class="pads-buttons__table">
        <tr class="pads-buttons__table--row">
          <CalcButton v-bind:propsdata="'C'" v-on:doClicked="clearVal" />
          <CalcButton v-bind:propsdata="'()'" v-on:doClicked="keypressed" />
          <CalcButton v-bind:propsdata="'%'" v-on:doClicked="keypressed" />
          <CalcButton v-bind:propsdata="'÷'" v-on:doClicked="keypressed" />
        </tr>
        <tr class="pads-buttons__table--row">
          <!-- create button and assign value to each button -->
          <!-- dis("1") will call function dis to display value -->
          <CalcButton v-bind:propsdata="'7'" v-on:doClicked="keypressed" />
          <CalcButton v-bind:propsdata="'8'" v-on:doClicked="keypressed" />
          <CalcButton v-bind:propsdata="'9'" v-on:doClicked="keypressed" />
          <CalcButton v-bind:propsdata="'x'" v-on:doClicked="keypressed" />
        </tr>
        <tr class="pads-buttons__table--row">
          <CalcButton v-bind:propsdata="'4'" v-on:doClicked="keypressed" />
          <CalcButton v-bind:propsdata="'5'" v-on:doClicked="keypressed" />
          <CalcButton v-bind:propsdata="'6'" v-on:doClicked="keypressed" />
          <CalcButton v-bind:propsdata="'-'" v-on:doClicked="keypressed" />
        </tr>
        <tr class="pads-buttons__table--row">
          <CalcButton v-bind:propsdata="'1'" v-on:doClicked="keypressed" />
          <CalcButton v-bind:propsdata="'2'" v-on:doClicked="keypressed" />
          <CalcButton v-bind:propsdata="'3'" v-on:doClicked="keypressed" />
          <CalcButton v-bind:propsdata="'+'" v-on:doClicked="keypressed" />
        </tr>
        <tr class="pads-buttons__table--row">
          <CalcButton v-bind:propsdata="'+/-'" v-on:doClicked="keypressed" />
          <CalcButton v-bind:propsdata="'0'" v-on:doClicked="keypressed" />
          <CalcButton v-bind:propsdata="'.'" v-on:doClicked="keypressed" />
          <CalcButton v-bind:propsdata="'='" v-on:doResult="runCalculate" />
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import CalcButton from "./CalcButton.vue";

export default {
  components: {
    CalcButton,
  },
  data() {
    return {
      padButton: "0",
    };
  },
  methods: {
    keypressed: function (e) {
      let number = Number(e);
      if (!isNaN(number)) {
        this.$emit("numberPushed", number);
      } else {
        if (e === "+" || e === "-" || e === "x" || e === "÷" || e === "%") {
          this.$emit("operatorPushed", e);
        } else if (e === "()") {
          console.log("operator () pushed");
        }
      }
    },
    runCalculate: function () {
      console.log("run calculate");
      this.$emit("runEval");
    },
    clearVal: function () {
      console.log("clear all");
      this.$emit("allClear");
    },
  },
};
</script>

<style lang="scss">
.pads {
  height: inherit;
  box-shadow: 1px 1px 1px rgb(30, 30, 30);
}

.pads-buttons {
  height: inherit;

  @include flexbox;
  @include align-items(center);
  @include justify-content(center);

  &__table {
    width: 100%;
    height: 100%;
    margin: auto;
    // border: 1px solid red;
    border-collapse: collapse;

    // th,
    // td {
    //   border: 1px solid #444444;
    // }
  }
}
</style>
