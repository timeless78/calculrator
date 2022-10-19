const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    sourceMap: true,
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/_mixins.scss";
          @import "@/assets/styles/_variables.scss";
          @import "@/assets/styles/_mediaQueries.scss";
          @import "@/assets/styles/_svg.scss";
          @import "@/assets/styles/_common.scss";
          @import "@/assets/fontello/css/arrow.css";
        `,
      },
    },
  },
});
