<template>
  <div class="pads">
    <div class="main-input">
      <table id="calcu">
        <tr>
          <CalcButton v-bind:propsdata="'C'" v-on:doClicked="keypressed" />
          <CalcButton v-bind:propsdata="'()'" v-on:doClicked="keypressed" />
          <CalcButton v-bind:propsdata="'%'" v-on:doClicked="keypressed" />
          <CalcButton v-bind:propsdata="'/'" v-on:doClicked="keypressed" />
        </tr>
        <tr>
          <!-- create button and assign value to each button -->
          <!-- dis("1") will call function dis to display value -->
          <CalcButton v-bind:propsdata="'7'" v-on:doClicked="keypressed" />
          <CalcButton v-bind:propsdata="'8'" v-on:doClicked="keypressed" />
          <CalcButton v-bind:propsdata="'9'" v-on:doClicked="keypressed" />
          <CalcButton v-bind:propsdata="'X'" v-on:doClicked="keypressed" />
        </tr>
        <tr>
          <CalcButton v-bind:propsdata="'4'" v-on:doClicked="keypressed" />
          <CalcButton v-bind:propsdata="'5'" v-on:doClicked="keypressed" />
          <CalcButton v-bind:propsdata="'6'" v-on:doClicked="keypressed" />
          <CalcButton v-bind:propsdata="'-'" v-on:doClicked="keypressed" />
        </tr>
        <tr>
          <CalcButton v-bind:propsdata="'1'" v-on:doClicked="keypressed" />
          <CalcButton v-bind:propsdata="'2'" v-on:doClicked="keypressed" />
          <CalcButton v-bind:propsdata="'3'" v-on:doClicked="keypressed" />
          <CalcButton v-bind:propsdata="'+'" v-on:doClicked="keypressed" />
        </tr>
        <tr>
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
    keypressed: function () {
      console.log("keypressed");
    },
    runCalculate: function () {
      console.log("run calculate");
    },
  },
};
</script>

<style lang="scss">
.pads {
  height: inherit;
  border-radius: 5px;
  box-shadow: 1px 0px 1px rgb(30, 30, 30);
  &__raws {
    @include flexbox;
    @include flex-direction(raw);
    @include align-items(center);
    @include justify-content(center);

    button {
      margin-top: 10px;
      margin-right: 10px;
      &:nth-child(1) {
        margin-left: 10px;
      }
    }
  }
}
</style>
