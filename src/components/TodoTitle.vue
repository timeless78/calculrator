<template>
  <div class="title">
    <p class="title__text">
      <span class="title__message">Good {{ message }},&nbsp;</span>
      <span class="title__name"> {{ this.propsdata.nick }}</span
      >.
    </p>
    <p class="title__task">
      <span class="title__task-top">You've got</span>
      <span class="title__task-count">
        <em class="title__task-left">{{ propsdata.left }}</em>
        <em v-if="propsdata.total" class="title__task-total">
          &nbsp;/ {{ propsdata.total }}</em
        >
      </span>
      <span class="title__task-bottom">
        <span v-if="this.propsdata.left > 1">tasks</span>
        <span v-else>task</span>
        today !
      </span>
      <span class="title__task-info"></span>
    </p>
  </div>
</template>

<script setup>
console.log("TodoTitle.vue");
</script>
<script>
import getDate from "@/components/common/getDate.js";

export default {
  props: ["propsdata"],
  data() {
    return {
      message: "",
    };
  },
  methods: {},
  computed: {},
  mounted() {
    this.message = getDate().daytime;
  },
};
</script>

<style lang="scss">
.title {
  max-width: $max-width;
  margin: 0 auto;
  letter-spacing: 0.03em;
  color: #fff;

  &__text {
    cursor: default;
    font-size: 1.6em;
    @include flexbox;
    @include align-items(center);
    @include flex-wrap(wrap);
    @include ellipsis();

    .wrap {
      position: relative;
      white-space: nowrap;
      overflow: hidden;
    }

    &__message {
      display: block;
      min-height: 2.7em;
      margin-right: 0.4em;
      @include flex-shrink(0);
    }

    &__name {
      display: block;
      background: 0;
      outline: 0;
      color: inherit;
      font-size: inherit;
      min-width: 1em;
      min-height: 2.7em;
      overflow: hidden;
      @include flex-shrink(1);

      br {
        display: none;
      }
      &:hover {
        text-decoration: underline;
        cursor: text;
      }
    }
  }
  &__task {
    margin-top: 3.5em;
    margin-bottom: 5em;
    font-weight: bold;

    &-top {
      display: block;
      font-size: 2.6em;
    }
    &-count {
      display: block;
      font-size: 5.4em;
    }
    &-total {
      font-size: 50%;
    }
    &-bottom {
      display: block;
      font-size: 2.6em;
    }
  }
}

// animation
.title {
  &__text {
    @include animation(fadeShow, 500ms);
  }
  &__task-top {
    @include animation(fadeShow, 600ms, 1, 400ms);
  }
  &__task-count {
    @include animation(fadeShow, 600ms, 1, 550ms);
  }
  &__task-bottom {
    @include animation(fadeShow, 600ms, 1, 700ms);
  }
}
</style>
