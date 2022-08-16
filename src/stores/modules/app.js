import { defineStore } from "pinia";

const useAppStore = defineStore("app", {
  state() {
    return {
      theme: "dark",
    };
  },
});

export default useAppStore;
