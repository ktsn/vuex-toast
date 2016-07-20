export const DefaultTransition = {
  functional: true,
  render(h, { children }) {
    const data = {
      staticAttrs: { tag: 'div', name: 'toast' }
    }
    return h('transition-group', data, children)
  }
}
