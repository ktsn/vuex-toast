<template>
  <div class="toast" :class="'toast-' + position">
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
  props: {
    position: {
      validator(value) {
        return /^(:?n|s|nw|ne|sw|se)$/.test(value)
      },
      default: 'ne'
    }
  },

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

<style lang="scss">
$width: 350px;

.toast {
  position: fixed;
  width: $width;
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

/**
 * Transition
 */
.toast-enter-active,
.toast-leave {
  opacity: 1;
}

.toast-enter,
.toast-leave-active {
  opacity: 0;
}

.toast-leave-active {
  position: absolute;
}

/**
 * Position
 */
.toast-n {
  top: 10px;
  left: 50%;
  margin-left: -$width / 2;
}

.toast-s {
  bottom: 10px;
  left: 50%;
  margin-left: -$width / 2;
}

.toast-ne {
  top: 10px;
  right: 10px;
}

.toast-nw {
  top: 10px;
  left: 10px;
}

.toast-se {
  bottom: 10px;
  right: 10px;
}

.toast-sw {
  bottom: 10px;
  left: 10px;
}

/**
 * Transition with position
 */
.toast-n,
.toast-ne,
.toast-nw {
  .toast-enter,
  .toast-leave-active {
    transform: translateY(-20px);
  }
}

.toast-s,
.toast-se,
.toast-sw {
  .toast-enter {
    transform: translateY(20px);
  }

  .toast-leave-active {
    transform: translateY(-100%) translateY(20px);
  }
}
</style>
