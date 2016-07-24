<template lang="html">
  <div>
    <form action="#toast" @submit.prevent="submit">
      <input type="text" v-model="message">
      <button type="submit">Submit</button>
    </form>

    <div action="config">
      <label>
        <span>Position</span>
        <select name="position" v-model="position">
          <option value="ne">ne</option>
          <option value="nw">nw</option>
          <option value="se">se</option>
          <option value="sw">sw</option>
          <option value="n">n</option>
          <option value="s">s</option>
        </select>
      </label>

      <label>
        <span>Type</span>
        <select name="type" v-model="type">
          <option value="info">info</option>
          <option value="success">success</option>
          <option value="warning">warning</option>
          <option value="danger">danger</option>
        </select>
      </label>
    </div>

    <toast :position="position"></toast>
  </div>
</template>

<script>
import { Toast, ADD_TOAST_MESSAGE } from '../../../src'
import { mapActions } from 'vuex'

export default {
  data: function () {
    return {
      message: 'This is toast message',
      position: 'ne',
      type: 'info'
    }
  },
  methods: {
    submit() {
      this.addToast({ text: this.message, type: this.type })
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

<style lang="scss">
</style>
