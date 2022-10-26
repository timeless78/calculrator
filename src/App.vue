<template>
  <div id="mainframe">
    <div class="top">
      <CalcHeader />
      <div class="top__view">
        <!-- <CalcScreen /> -->
        <CalcScreen ref="calcScreen" />
      </div>
    </div>
    <div class="bottom">
      <CalcPad
        v-on:numberPushed="processNumber"
        v-on:operatorPushed="processOperator"
        v-on:allClear="processClear"
        v-on:runEval="processEval"
      />
      <CalcFooter />
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
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
  data() {
    return {
      totalFormular: [],
      combineNumber: { pre: 0, now: 0 },
      lastIndexofFormular: -1,
    };
  },
  mounted() {
    this.addFormular(0);
  },
  methods: {
    isLastDigitNumber: function () {
      return !isNaN(this.totalFormular[this.lastIndexofFormular]);
    },
    addFormular: function (arg, doUpdate = true) {
      this.lastIndexofFormular = this.totalFormular.push(arg) - 1;
      this.combineNumber.pre = 0;
      this.combineNumber.now = 0;

      if (doUpdate) {
        this.$refs.calcScreen.fomularScreen(this.totalFormular);
      }

      console.log(`Current formular is '${this.totalFormular}'!`);
    },
    modifyFormular: function (arg, doUpdate = true) {
      this.totalFormular[this.lastIndexofFormular] = arg;
      console.log(`Current formular is '${this.totalFormular}'!`);

      if (doUpdate) {
        this.$refs.calcScreen.fomularScreen(this.totalFormular);
      }
    },
    processNumber: function (digit) {
      if (!this.isLastDigitNumber()) {
        this.addFormular(0, false);
      }

      if (this.combineNumber.pre === 0) {
        this.combineNumber.now = digit;
      } else {
        this.combineNumber.now = this.combineNumber.pre * 10 + digit;
      }

      this.modifyFormular(this.combineNumber.now);
      this.combineNumber.pre = this.combineNumber.now;
    },
    processOperator: function (operator) {
      if (this.isLastDigitNumber()) {
        this.addFormular(operator);
      } else {
        this.modifyFormular(operator);
      }
    },
    processClear: function () {
      this.totalFormular = [];
      this.addFormular(0);
    },
    processEval: function () {
      let resultVal = 0;
      // let operator = undefined;
      this.totalFormular.forEach((element) => {
        if (!isNaN(element)) {
          resultVal += element;
        }
      });

      this.$refs.calcScreen.resultScreen(resultVal);
    },
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
  margin: 1rem 1rem;
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
