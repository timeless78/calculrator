<template>
    <transition name="modal" appear>
      <div class="modal modal__dim" @click.self="doclose">
        <div class="modal__content">
          <p class="modal__text">
            <slot name="modal-text">(여기에 모달 내용이 들어가요)</slot>
          </p>
          <button class="modal__close" @click="doclose">OK</button>
        </div>
      </div>
    </transition>
  </template>
<script>
export default {
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    doclose: function () {
      this.$emit('close');
    }
  }
}
</script>
  <style lang="scss">
  
  .modal-enter {
    opacity: 0;
  
    .modal__content {
      transform: translateY(30px);
      transition: transform 0.6s;
    }
  }
  
  .modal-enter-active {
    transition: opacity 0.3s;
  }
  
  .modal-leave-active {
    transition: opacity 0.3s 0.05s;
  }
  
  .modal-leave-to {
    opacity: 0;
  
    .modal__content {
      transform: translateY(30px);
      transition: transform 0.6s;
    }
  }
  </style>