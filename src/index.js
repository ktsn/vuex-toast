// @flow

import Toast from './Toast'
import { update } from './utils'

export function createToast(options = {}) {
  const {
    transition
  } = options

  return update(Toast, {
    components: {
      toastTransition: transition
    }
  })
}

export { Toast }
export * from './module'
