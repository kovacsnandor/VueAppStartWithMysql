import { defineStore } from "pinia";

export const useLoginStore = defineStore({
  id: "login",
  state: () => ({
    userName: null,
    password: null,
    accessToken: null,
    refreshToken: null,
    userId: 0,
    number: 0,
    loginTime: 15,
    timerId: null,
    leftTime: null,
    accessTime: 0,
    loginSuccess: 0,
    loginErrorMessage: null,
  }),
  actions: {
    increaseCount() {
      this.count++;
    },
    decreaseCount() {
      this.count--;
    },
  },
  getters: {
    oddOrEven() {
      return this.count % 2 === 0 ? "even" : "odd";
    },
  },
});
