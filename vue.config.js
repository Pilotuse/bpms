
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  productionSourceMap: false,
  configureWebpack: config => {
    config.plugins.push(new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      generateStatsFile: true,
      statsOptions: { source: false }
    }));
    config.plugins.push(new CompressionWebpackPlugin({
      filename: info => {
        return `${info.path}.gz${info.query}`
      },
      algorithm: 'gzip',
      threshold: 10240, // 只有大小大于该值的资源会被处理 10240
      test: new RegExp('\\.(' + ['js'].join('|') + ')$'
      ),
      minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
      deleteOriginalAssets: false // 删除原文件
    }));
    config.optimization = {
      splitChunks: {
        chunks: "all",          //async异步代码分割 initial同步代码分割 all同步异步分割都开启
        minSize: 10000,         //字节 引入的文件大于30kb才进行分割
        minChunks: 1,           //模块至少使用次数
        cacheGroups: {
          html2canvas: {
            name: 'html2canvas',
            test: /[\\/]node_modules[\\/](html2canvas|jspdf)[\\/]/,
            priority: -10
          },

          element: {
            name: 'element',
            test: /[\\/]node_modules[\\/]element-ui[\\/]/,
            priority: -9
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -20
          },
        }
      }
    }
  }
};
