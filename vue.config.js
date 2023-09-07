// https://cli.vuejs.org/zh/config/#vue-config-js
const Timestamp = new Date().getTime()
module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  publicPath: './',
  css: {
    extract: {
      Type: true
    }
  },

  devServer: {
    proxy: {
      '/container': {
        target: 'http://192.168.1.220:7005',
        changeOrigin: true,
        ws: true
      },
      '/api/light-app/transmit': {
        target: 'http://192.168.1.220:7005',
        changeOrigin: true,
        ws: true
      },
      '/api/v2/device/service': {
        target: 'http://192.168.1.220:59881',
        changeOrigin: true,
        ws: true
      },
      '/api/v2/device/name': {
        target: 'http://192.168.1.220:59882',
        changeOrigin: true,
        ws: true
      },
      '/stream': {
        target: 'http://192.168.1.220:18889',
        changeOrigin: true,
        ws: true
      },
      '/start': {
        target: 'http://192.168.1.220:8000',
        changeOrigin: true,
        ws: true
      },
      '/stop': {
        target: 'http://192.168.1.220:8000',
        changeOrigin: true,
        ws: true
      }
    }
  },

  // webpack 配置
  configureWebpack: {
    output: {
      // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `static/js/[name].${Timestamp}.js`,
      chunkFilename: `static/js/[name].${Timestamp}.js`
    }
  }
}
