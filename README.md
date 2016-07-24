# Vuex Toast

Simple toast notification using Vuex

## Example

First, you should register a toast module to your Vuex store.

```js
import Vue from 'vue'
import Vuex from 'vuex'
import { createToastModule } from 'vuex-toast'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // ...
    toast: createToastModule({
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
    },

    sendNotification(text) {
      this.addToast({
        text,
        type: 'success'
      })
    }
  })
}
```

## License

MIT
