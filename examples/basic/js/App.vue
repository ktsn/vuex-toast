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
      position: 'ne'
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

<style lang="scss">
</style>
