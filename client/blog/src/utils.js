export default {
  set(key, value) {
    localStorage.setItem(key || '', value || '')
  },
  get(key) {
    return localStorage.getItem(key || '')
  },

  delete(key) {
    return localStorage.removeItem(key || '')
  },

  clear() {
    return localStorage.clear()
  }
}
