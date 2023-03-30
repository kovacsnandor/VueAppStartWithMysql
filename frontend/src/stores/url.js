import { defineStore } from "pinia";

export const useUrlStore = defineStore({
  id: "url",
  state: () => ({
    urlData: "http://localhost:3000",
    urlAuth: "http://localhost:4000",
  }),
  getters: {
    urlLogin() {
      return `${this.urlData}/login`;
    },
    urlLogout() {
      return `${this.urlData}/logout`;
    },
    urlToken() {
      return `${this.urlData}/token`;
    },
  },
});
