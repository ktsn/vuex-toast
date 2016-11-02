# Vuex Toast

Simple toast notification using Vuex
Required: Vue >= 2.0, Vuex >= 2.0

## Demo

http://codepen.io/ktsn/pen/Bzxkjd

## Example

First, you should register a toast module to your Vuex store.

```js
import Vue from 'vue'
import Vuex from 'vuex'
import { createModule } from 'vuex-toast'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // ...
    toast: createModule({
      dismissInterval: 8000
    })
    // ...
  }
})
```

Put `Toast` component anywhere in your application.

```html
<template>
  <div>
    <article><!-- Your contents --></article>
    <toast position="ne"></toast>
  </div>
</template>

<script>
import { Toast } from 'vuex-toast'

export default {
  // ...
  components: {
    Toast
  }
  // ...
}
</script>
```

You can send notifications to the toast component with toast type.

```js
import { mapActions } from 'vuex'
import { ADD_TOAST_MESSAGE } from 'vuex-toast'

export default {
  methods: {
    ...mapActions({
      addToast: ADD_TOAST_MESSAGE
    }),

    sendNotification(text) {
      this.addToast({
        text,
        type: 'success'
      })
    }
  }
}
```

## API
### `Toast`
A Vue component that shows toast messages.

- props
  - position

### `createModule(options): VuexModule`
Create Vuex module for managing toast messages.

- options
  - dismissInterval

### `createComponent(options): VueComponent`
Create customized toast component.

- options
  - transition

### Action Types
- ADD_TOAST_MESSAGE
  - `dispatch(ADD_TOAST_MESSAGE, { text, type })`
- REMOVE_TOAST_MESSAGE
  - `dispatch(REMOVE_TOAST_MESSAGE, messageId)`

### Getters
- toastMessage
  - get all toast messages.

### Toast Message Type
- `id` Auto generated message ID
- `text` Text of the toast message
- `type` Type of the toast message
- `dismissAfter` Optional: ovverride default dismissInterval

## License

MIT
