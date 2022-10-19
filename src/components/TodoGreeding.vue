<template>
  <div class="greeding">
    <p class="greeding__message">
      <span class="greeding__message-text">Nice to meet you!</span>
      <span class="greeding__message-text"
        >I'm going to remember your tasks.</span
      >
    </p>
    <p class="greeding__ask">{{ askMsg }}</p>
    <label for="user-name">Name</label>
    <!-- <span class="icon-right-small"></span> -->
    <div class="main-input">
      <input
        class="hello__input"
        type="text"
        id="nickname"
        placeholder="Let me know your nick"
        v-model="nickname"
        v-on:keyup.enter="writeNickname"
        required
        autofocus
      />
      <button class="hello__button">
        <span class="blind">Enter</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nickname: "",
      askMsg: "What is your nickname?",
    };
  },
  methods: {
    writeNickname: function () {
      this.$emit("addUser", this.nickname);
    },
  },
};
</script>
<style lang="scss">
.greeding {
  max-width: $max-width;
  margin: 0 auto;
  letter-spacing: 0.03em;
  color: #fff;

  label {
    display: none;
  }

  &__message {
    padding-top: 2.4em;
    margin-bottom: 6em;
    font-size: 1.6em;
    line-height: 1.75em;

    &-text {
      display: block;
    }
  }
  &:first-child {
    margin-top: 4em;
  }
  &__ask {
    font-size: 2.8em;
    font-weight: bold;
    margin-bottom: 4em;
  }
}

//애니메이션 관리
.greeding {
  &__message-text {
    @for $i from 1 through 2 {
      &:nth-child(#{$i}) {
        @include animation(fadeShow, 450ms, 1, #{$i * 200}ms);
      }
    }
  }
  &__ask {
    @include animation(fadeShow, 750ms, 1, 900ms);
  }
  .main-input {
    @include animation(fadeShow, 850ms, 1, 1100ms);
  }
}
</style>
