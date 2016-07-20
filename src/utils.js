// @flow

/**
 * Simple update without mutation
 */
export function update(obj: Object, updater: Object): Object {
  const res = {}
  Object.keys(obj).forEach(key => {
    res[key] = updater[key] === undefined ? obj[key] : updater[key]
  })
  return res
}
