module.exports = {
  devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:7070/',
          changeOrigin: true,
          pathRewrite:{
            '^/api' : ''
          }
        },
      }
    },
};