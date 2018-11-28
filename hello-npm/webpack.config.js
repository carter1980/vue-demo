const path  = require('path');
module.exports = {
  entry:'./src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/', 
    filename: 'bundle.js'
  },
  module: {
    // 关于模块配置
     rules: [
     {
       test: /\.vue$/,
       use: [
         "vue-loader"
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js',
    }}
}