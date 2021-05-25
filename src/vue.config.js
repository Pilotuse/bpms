module.exports = {
    devServer: {
        proxy: {
          '/api': {
            target: ' http://localhost:2345',
            changeOrigin: true,
            pathRewrite:{
              '^/api' : ''
            }
          },
        }
      },
};

