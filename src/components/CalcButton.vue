<template>
  <td>
    <input type="button" v-model="keyVal" v-on:click="clicked" />
  </td>
</template>

<script>
export default {
  props: ["propsdata"],
  data() {
    return {
      keyVal: 0,
    };
  },
  mounted() {
    this.keyVal = this.propsdata;
  },
  methods: {
    clicked: function () {
      if (this.keyVal === "=") {
        this.$emit("doResult");
      } else {
        this.$emit("doClicked", this.keyVal);
      }
    },
  },
};
</script>

<style lang="scss">
input {
  width: 7.5rem;
  height: 5.3rem;
  background-color: #fafafa;
  border-radius: 20%;
  border: 0px;
  box-shadow: 1px 1px 1px gray;
  cursor: Pointer;
  font-size: 2rem;
  text-shadow: 1px 1px 2px gray;
  transition: transform color 0.1s;

  &:hover {
    font-weight: bold;
  }
  &:active {
    transform: translateX(1px) translateY(1px);
    box-shadow: 0px 0px 0px gray;
  }
}
</style>
