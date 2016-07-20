<template>
  <div class="toast">
    <toast-transition>
      <div class="toast-message" v-for="m in messages" :key="m.id" role="note">
        <div class="toast-message-text">{{ m.text }}</div>
        <button class="toast-button" aria-label="Close" type="button" @click="close(m.id)"></button>
      </div>
    </toast-transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { REMOVE_TOAST_MESSAGE } from './module'
import { DefaultTransition as ToastTransition } from './config'

export default {
  computed: mapGetters({
    messages: 'toastMessages'
  }),

  methods: mapActions({
    close: REMOVE_TOAST_MESSAGE
  }),

  components: {
    ToastTransition
  }
}
</script>

<style>
.toast {
  position: fixed;
  top: 10px;
  right: 10px;
  width: 350px;
  z-index: 10000;
}

.toast-message {
  position: relative;
  box-sizing: border-box;
  margin-bottom: 10px;
  padding: 15px;
  width: 100%;
  background-color: #666;
  color: #fff;
  transition: 400ms cubic-bezier(0.17, 0.67, 0.17, 0.98);
  transition-property: opacity, transform;
}

.toast-button {
  position: absolute;
  top: 0;
  right: 5px;
  padding: 2px;
  background-color: transparent;
  border-width: 0;
  font-size: 1.5em;
  color: inherit;
  cursor: pointer;
}

.toast-button::before {
  content: '\d7';
}

.toast-enter-active,
.toast-leave {
  opacity: 1;
}

.toast-enter,
.toast-leave-active {
  opacity: 0;
  transform: translateY(-30px);
}

.toast-leave-active {
  position: absolute;
}
</style>
