// @flow

const PREFIX = 'vuex-toast/'

const ADD = `${PREFIX}ADD_TOAST_MESSAGE`
const REMOVE = `${PREFIX}REMOVE_TOAST_MESSAGE`

export {
  ADD as ADD_TOAST_MESSAGE,
  REMOVE as REMOVE_TOAST_MESSAGE
}

function createMessage(id: number, text: string): ToastMessage {
  return {
    id,
    text
  }
}

export function createToastModule({
  dismissInterval = 5000
}: ToastOptions = {}) {
  let maxToastId = 0

  const state: ToastState = {
    messages: []
  }

  const getters = {
    toastMessages: (state: ToastState) => state.messages
  }

  const actions = {
    [ADD] ({ commit }, { text }) {
      const id = ++maxToastId

      commit(ADD, createMessage(id, text))

      setTimeout(() => {
        commit(REMOVE, id)
      }, dismissInterval)
    },

    [REMOVE] ({ commit }, id) {
      commit(REMOVE, id)
    }
  }

  const mutations = {
    [ADD] (state: ToastState, data) {
      state.messages.push(data)
    },

    [REMOVE] (state: ToastState, id) {
      state.messages = state.messages.filter(m => m.id !== id)
    }
  }

  return {
    state,
    getters,
    actions,
    mutations
  }
}
