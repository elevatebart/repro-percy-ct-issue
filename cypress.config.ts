import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    experimentalJustInTimeCompile: true,
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
