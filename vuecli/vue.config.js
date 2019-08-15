module.exports = {
  devServer: {
        proxy: {
            '/rest': {
                target: 'http://localhost:3000/rest',
                changeOrigin: true,
                pathRewrite: {
                  '^/rest': ''
                }
            }
        }
    }
}