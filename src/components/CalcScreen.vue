<template>
  <div class="calcScreen">
    <textarea
      class="calcScreen__input"
      v-model="inputFormular"
      v-on:input="onDataChanged"
    >
    </textarea>
    <div class="calcScreen__result">
      <span>{{ resultNumber }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["previewVal"],
  expose: ["inputedScreen", "resultScreen"],
  data() {
    return {
      inputFormular: "",
      resultNumber: 0,
    };
  },
  methods: {
    checkInputVal: function (event) {
      this.inputNumber = event.target;
    },
    onDataChanged: function () {
      console.log(this.inputFormular);
    },
    inputedScreen: function (arrVal) {
      this.inputFormular = "";

      arrVal.forEach((element) => {
        this.inputFormular += `${element}`;
      });
    },
    resultScreen: function (resultVal) {
      this.resultNumber = resultVal;

      //   console.log("resultScreen : ", resultVal);
    },
  },
};
</script>

<style lang="scss">
.calcScreen {
  width: 100%;
  height: inherit;
  // border: 1px solid rgb(30, 30, 30);
  border-radius: 5px;
  box-shadow: 1px 0px 1px rgb(30, 30, 30);

  &__input {
    width: 100%;
    height: 50%;
    box-sizing: border-box;
    border: 2px solid #1e90ff;
    border-radius: 5px;
    resize: none;
    font-size: 2em;
    text-align: right;
    background-color: inherit;
    vertical-align: bottom;
  }
  &__result {
    height: 50%;
    color: rgb(180, 180, 180);
    font-size: 1.6em;
    text-align: right;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
    vertical-align: bottom;
    padding: 0px auto;
    border: 2px solid yellow;
    border-radius: 5px;
  }
}
</style>
