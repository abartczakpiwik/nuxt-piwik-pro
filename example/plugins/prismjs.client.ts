import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/themes/prism-okaidia.min.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:finish", () => {
    Prism.highlightAll();
  });
});
