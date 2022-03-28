const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  productionSourceMap: false,
  transpileDependencies: true,
  lintOnSave: false,
  //代理服务器 解决跨域问题
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.98.123.211',
        changeOrigin: true,
      },

    }
  }
})
