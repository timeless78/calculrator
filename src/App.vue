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
        v-on:numberPushed="computeOperand"
        v-on:operatorPushed="computeOperator"
        v-on:operatorBracket="computeBracket"
        v-on:buttonPushed="runSysFuncts"
        v-on:runEval="showResult"
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
      postfix: "",
      currentDigit: { old: 0, now: 0 },
      prevResultVal: 0,
    };
  },
  mounted() {
    this.InitInputedNumber();

    this.infix = Equation.getEquation();
    // Equation.appendObj(0);

    this.updateScreen();
  },
  computed: {
    getResult() {
      return CalcMath.calculate(this.postfix);
    },
  },
  methods: {
    InitInputedNumber() {
      this.currentDigit.old = 0;
      this.currentDigit.now = 0;
    },
    computeOperand: function (digit) {
      if (Equation.isNumberofLastObj()) {
        if (this.currentDigit.old === 0) {
          this.currentDigit.now = digit;
        } else {
          this.currentDigit.now = this.currentDigit.old * 10 + digit;
        }

        if (Equation.getLength() < 1) {
          Equation.appendObj(this.currentDigit.now);
        } else {
          Equation.modifyLastObj(this.currentDigit.now);
        }
        this.currentDigit.old = this.currentDigit.now;
      } else {
        Equation.appendObj(digit);
        this.currentDigit.old = digit;
      }

      this.updateScreen();
    },
    computeOperator: function (operator) {
      // 마지막 입력한 수식이 연산자 인지 피연산자 인지 판단하여 처리
      var last = Equation.getLastObj();
      if (CalcMath.isOperator(last)) {
        Equation.modifyLastObj(operator);
      } else {
        Equation.appendObj(operator);
      }

      this.InitInputedNumber();
      this.updateScreen();
    },
    computeBracket: function () {
      var bracket = "(";
      if (
        this.infix.find((element) => {
          return element === "(";
        }) !== undefined
      ) {
        bracket = ")";
      }
      // console.log("bracket : ", bracket);
      if (Equation.getLength() > 0 && bracket === "(") {
        Equation.appendObj("x");
      }

      Equation.appendObj(bracket);
      this.updateScreen();
    },
    runSysFuncts: function (button) {
      if (button === "clear") {
        this.InitInputedNumber();

        this.infix = Equation.clear();
        // Equation.appendObj(0);
      } else if (button === "back") {
        Equation.removeLastObj();
      }

      this.updateScreen();
    },
    showResult() {
      let outResult = CalcMath.calculate(this.postfix);
      if (isNaN(outResult)) {
        outResult = "";
      }
      this.$refs.calcScreen.resultScreen(outResult, false);
    },
    updateScreen() {
      this.$refs.calcScreen.inputedScreen(this.infix);

      this.postfix = CalcMath.infixToPostfix(this.infix);
      let outResult = CalcMath.calculate(this.postfix);
      if (isNaN(outResult)) {
        outResult = "";
      }
      this.$refs.calcScreen.resultScreen(outResult, true);
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
