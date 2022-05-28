import { defineStore } from 'pinia';

export const useStore = defineStore('counter', {
  state: () => ({ example: 0 }),
  getters: {},
  actions: {
    example() {},
    exampleGetter() {},
  },
});
