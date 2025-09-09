import { produtos } from "./src/data/produtos.mjs";

const { createApp } = Vue;

createApp({
  data() {
    return {
      produtos,
    };
  },
}).mount("#app");
