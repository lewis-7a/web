module.exports = {
    css: {
      loaderOptions: {
        scss: {
          additionalData: `@import "~@/assets/scss/styles.scss";`
        }
      }
    }
  }
  module.exports = {
    configureWebpack: {
      plugins: [
        new MyAwesomeWebpackPlugin()
      ]
    }
  }