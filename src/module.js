// @flow

const PREFIX = '@@toast/'

const ADD = `${PREFIX}ADD_TOAST_MESSAGE`
const REMOVE = `${PREFIX}REMOVE_TOAST_MESSAGE`

export {
  ADD as ADD_TOAST_MESSAGE,
  REMOVE as REMOVE_TOAST_MESSAGE
}

function createMessage(id: number, text: string, type: string): ToastMessage {
  return {
    id,
    text,
    type
  }
}

export function createModule(options: ToastOptions = {}) {
  const {
    dismissInterval = 5000
  } = options

  let maxToastId = 0

  const state: ToastState = {
    messages: []
  }

  const getters = {
    toastMessages: (state: ToastState) => state.messages
  }

  const actions = {
    [ADD]({ commit }, { text, type = 'info', dismissAfter = dismissInterval}) {
      const id = ++maxToastId
    
      commit(ADD, createMessage(id, text, type))
      setTimeout(() => commit(REMOVE, id), dismissAfter)
    },

    [REMOVE]({ commit }, id) {
      commit(REMOVE, id)
    }
  }

  const mutations = {
    [ADD](state: ToastState, data: ToastMessage) {
      state.messages.push(data)
    },

    [REMOVE](state: ToastState, id: number) {
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
