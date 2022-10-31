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
      currentDigit: "",
    };
  },
  mounted() {
    this.InitInputedNumber();
    this.infix = Equation.getEquation();

    this.updateScreen();
  },
  computed: {
    getResult() {
      return CalcMath.calculate(this.postfix);
    },
  },
  methods: {
    InitInputedNumber() {
      this.currentDigit = "";
    },
    computeOperand: function (digit) {
      this.currentDigit += `${digit}`;

      // 마지막 입력값이 숫자일 경우 ( 연산자 입력이 아닐 경우 )
      if (Equation.isNumberofLastObj()) {
        if (Equation.getLength() < 1) {
          Equation.appendObj(this.currentDigit);
        } else {
          Equation.modifyLastObj(this.currentDigit);
        }
      } else {
        Equation.appendObj(this.currentDigit);
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
      } else if (button === "back") {
        this.InitInputedNumber();
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

@media (min-width: $max-width) {
  #mainframe {
    width: 100%;
  }
}

#mainframe {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: "Noto Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  margin: 1rem 1rem;

  min-width: $max-width;
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
