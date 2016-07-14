<template lang="html">
  <div>
    <form action="#toast" @submit.prevent="submit">
      <input type="text" v-model="message">
      <button type="submit">Submit</button>
    </form>

    <toast></toast>
  </div>
</template>

<script>
import { Toast, ADD_TOAST_MESSAGE } from '../../../src'
import { mapActions } from 'vuex'

export default {
  data: function () {
    return {
      message: 'This is toast message'
    }
  },
  methods: {
    submit() {
      this.addToast({ text: this.message })
    },
    ...mapActions({
      addToast: ADD_TOAST_MESSAGE
    })
  },
  components: {
    Toast
  }
}
</script>

<style lang="css">
</style>
