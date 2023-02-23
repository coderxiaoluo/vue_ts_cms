import { defineStore } from 'pinia'

export const useCount = defineStore('count', {
  state: () => {
    return {
      count: 100
    }
  },
  getters: {
    dubCount(state) {
      return state.count * 100
    }
  },
  actions: {
    addCount() {
      this.count++
    }
  }
})
