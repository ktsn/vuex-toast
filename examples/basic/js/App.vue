<template lang="html">
  <article>
    <h1>Vuex Toast Demo</h1>

    <input class="text" type="text" v-model="text">

    <label>
      <span>Type</span>
      <select v-model="type">
        <option value="info">info</option>
        <option value="success">success</option>
        <option value="warning">warning</option>
        <option value="danger">danger</option>
      </select>
    </label>

    <label>
      <span>Position</span>
      <select v-model="position">
        <option value="ne">ne</option>
        <option value="nw">nw</option>
        <option value="se">se</option>
        <option value="sw">sw</option>
        <option value="n">n</option>
        <option value="s">s</option>
      </select>
    </label>

    <div class="submit">
      <input class="submit-button" type="button" value="Send Notification" @click="addToast({ text, type })">
    </div>

    <toast :position="position"></toast>
  </article>
</template>

<script>
import { Toast, ADD_TOAST_MESSAGE } from 'vuex-toast'
import { mapActions } from 'vuex'

export default {
  data: function () {
    return {
      text: 'This is toast message',
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
article {
  margin: 30px auto;
  padding: 30px 50px;
  width: 700px;
  background-color: #fff;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
}

h1 {
  margin-top: 0;
  margin-bottom: 30px;
  text-align: center;
  font-size: 36px;
  font-weight: 500;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 2px;
  font-size: 18px;
}

label {
  margin-right: 5px;
  vertical-align: middle;
}

.text {
  margin-bottom: 10px;
  width: 100%;
  display: block;
}

.submit {
  margin-top: 30px;
  text-align: center;
}

.submit-button {
  padding: 10px 20px;
  background-color: #43b4ec;
  border-width: 0;
  color: #fff;
  cursor: pointer;
  transition: background-color 200ms;
}

.submit-button:hover {
  background-color: #63c7ef;
}
</style>
