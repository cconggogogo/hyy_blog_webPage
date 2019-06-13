const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: 'http://127.0.0.1:3000/',
      // target: 'http://193.112.26.73:3000/',
      // target: 'http://222.20.38.240:3000/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    }),
  );
};
