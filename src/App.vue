<template>
  <div id="mainframe">
    <div class="top">
      <CalcHeader />
      <div class="top__view">
        <!-- <CalcScreen /> -->
        <CalcScreen ref="calcScreen" v-bind:previewVal="getResult" />
        <!-- <span>{{ temporaryResult }}</span> -->
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
      totalEquation: [],
      combineNumber: { old: 0, now: 0 },
      lastIndexofEquation: -1,
      resultVal: 0,
    };
  },
  mounted() {
    this.combineNumber.old = 0;
    this.combineNumber.now = 0;

    this.totalEquation = Equation.getEquation();
    Equation.appendObj(0);
    this.lastIndexofEquation = Equation.getLength() - 1;

    this.updateScreen();
  },
  computed: {
    getResult() {
      return this.temporaryResult();
    },
  },
  methods: {
    getLastEquation() {
      return this.totalEquation[this.lastIndexofEquation];
    },
    addEquation: function (arg, doUpdate = true) {
      this.lastIndexofEquation = this.totalEquation.push(arg) - 1;
      this.combineNumber.old = 0;
      this.combineNumber.now = 0;

      if (doUpdate) {
        this.updateScreen();
      }
    },
    modifyEquation: function (arg, doUpdate = true) {
      this.totalEquation[this.lastIndexofEquation] = arg;

      if (doUpdate) {
        this.updateScreen();
      }
    },
    processNumber: function (digit) {
      var last = this.getLastEquation();
      if (CalcMath.isOperator(last)) {
        this.addEquation(0, false);
      }

      if (this.combineNumber.old === 0) {
        this.combineNumber.now = digit;
      } else {
        this.combineNumber.now = this.combineNumber.old * 10 + digit;
      }

      this.modifyEquation(this.combineNumber.now);
      this.combineNumber.old = this.combineNumber.now;
    },
    processOperator: function (operator) {
      // 마지막 입력한 수식이 연산자 인지 피연산자 인지 판단하여 처리
      var last = this.getLastEquation();
      if (CalcMath.isOperator(last)) {
        this.modifyEquation(operator);
      } else {
        this.addEquation(operator);
      }
    },
    processBracket: function (operator) {
      var last = this.getLastEquation();
      if (!CalcMath.isOperator(last)) {
        this.addEquation("x", false);
      }

      // hasAlredyBracket();
      this.addEquation(operator);
    },
    processButton: function (button) {
      if (button === "clear") {
        this.totalEquation = [];
        this.addEquation(0, false);
      } else if (button === "back") {
        this.totalEquation.pop();
      }

      this.updateScreen();
    },
    temporaryResult() {
      let infix = this.totalEquation;
      // console.log("infix ==> ", infix);
      let postfix = CalcMath.infixToPostfix(infix);
      console.log("postfix ==> ", postfix);
      let resultVal = CalcMath.calculate(postfix);
      // console.log("result ==> ", resultVal);

      return resultVal;
    },
    updateScreen() {
      this.$refs.calcScreen.inputedScreen(this.totalEquation);
      // this.$refs.calcScreen.resultScreen(this.getResult());
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
