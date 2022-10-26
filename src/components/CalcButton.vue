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
// .calcbutton {
//   width: 5.3rem;
//   height: 5.3rem;
//   background-color: #fafafa;
//   border-radius: 10px;
//   background-size: 1.62rem 1.62rem;
//   background-position: 50% 50%;
//   background-repeat: no-repeat;

//   &:hover {
//     font-weight: bold;
//   }
// }
</style>
