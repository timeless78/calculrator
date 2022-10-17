const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    sourceMap: true,
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/reset.scss";
          @import "@/assets/styles/_mixins.scss";
          @import "@/assets/styles/_variables.scss";
          @import "@/assets/fontello/css/arrow.css";
        `,
      },
    },
  },
});
