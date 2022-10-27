<template>
  <div id="mainframe">
    <div class="top">
      <CalcHeader />
      <div class="top__view">
        <!-- <CalcScreen /> -->
        <CalcScreen ref="calcScreen" v-bind:previewVal="getResult" />
      </div>
    </div>
    <div class="bottom">
      <CalcPad
        v-on:numberPushed="processNumber"
        v-on:operatorPushed="processOperator"
        v-on:operatorBracket="processBracket"
        v-on:buttonPushed="processButton"
        v-on:runEval="updateScreen"
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
import CalcMath from "./components/common/calculation.js";
import Equation from "./components/common/EquationArr.js";

export default {
  components: {
    CalcHeader,
    CalcScreen,
    CalcPad,
    CalcFooter,
  },
  data() {
    return {
      infix: [],
      combineNumber: { old: 0, now: 0 },
      lastIndexofEquation: -1,
      resultVal: 0,
    };
  },
  mounted() {
    this.combineNumber.old = 0;
    this.combineNumber.now = 0;

    this.infix = Equation.getEquation();
    Equation.appendObj(0);

    this.updateScreen();
  },
  computed: {
    getResult() {
      let postfix = this.computeResult();
      console.log(postfix);
      return CalcMath.calculate(postfix);
    },
  },
  methods: {
    computeResult() {
      return CalcMath.infixToPostfix(this.infix);
    },
    processNumber: function (digit) {
      if (Equation.isNumberofLastObj()) {
        if (this.combineNumber.old === 0) {
          this.combineNumber.now = digit;
        } else {
          this.combineNumber.now = this.combineNumber.old * 10 + digit;
        }

        Equation.modifyLastObj(this.combineNumber.now);
        this.combineNumber.old = this.combineNumber.now;
      } else {
        Equation.appendObj(digit);
        this.combineNumber.old = digit;
      }

      this.updateScreen();
    },
    processOperator: function (operator) {
      // 마지막 입력한 수식이 연산자 인지 피연산자 인지 판단하여 처리
      var last = Equation.getLastObj();
      if (CalcMath.isOperator(last)) {
        Equation.modifyLastObj(operator);
      } else {
        Equation.appendObj(operator);
      }

      this.combineNumber.old = 0;
      this.combineNumber.now = 0;

      this.updateScreen();
    },
    processBracket: function () {
      var targetOP = "(";
      if (
        this.infix.find((element) => {
          return element === "(";
        }) !== undefined
      ) {
        targetOP = ")";
      }
      console.log("targetOP : ", targetOP);
      if (Equation.isNumberofLastObj() && targetOP === "(") {
        Equation.appendObj("x");
      }

      Equation.appendObj(targetOP);
      this.updateScreen();
    },
    processButton: function (button) {
      if (button === "clear") {
        this.combineNumber.old = 0;
        this.combineNumber.now = 0;

        Equation.clear();
        Equation.appendObj(0);
      } else if (button === "back") {
        // this.totalEquation.pop();
      }

      this.updateScreen();
    },
    updateScreen() {
      this.$refs.calcScreen.inputedScreen(this.infix);

      let postfix = this.computeResult();
      console.log(postfix);
      let out = CalcMath.calculate(postfix);
      this.$refs.calcScreen.resultScreen(out);
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
