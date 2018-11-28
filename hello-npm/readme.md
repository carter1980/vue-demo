# npm demo

npm init

npm install vue -S

npm i webpack webpack-dev-server webpack-merge -D

## 支持 CSS

npm install css-loader -D

USE:
{
    test: /\.css$/,
    use: ["vue-style-loader", "css-loader"]
}
import './assets/css/style.css'

## 支持 CSS 预处理语言

npm install less less-loader -D

\# sass
npm install node-sass sass-loader -D

\# stylus
npm install stylus stylus-loader -D

## 支持图片及图标字体

安装图片及图标字体依赖的 loader。
npm install url-loader file-loader -D

## 使用 Webpack 插件 Babel

npm install babel-loader @babel/core @babel/cli @babel/preset-env -D

## 提取 CSS, CSS 压缩及优化, 生成首页

npm i mini-css-extract-plugin -D
npm install postcss-loader autoprefixer cssnano -D
手动引入打包后的 JavaScript 和 CSS 比较麻烦，使用 html-webpack-plugin 插件生成的页面自动引入了打包后的资源。
npm install html-webpack-plugin -D

```js
var HtmlWebpackPlugin = require('html-webpack-plugin')

plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.tpl.html'
    })
]
```

## 分离 Webpack 配置

1. 编写一个基本配置文件（webpack.base.config.js）
2. 使用 webpack-merge 合并这个基础配置和针对环境的特定的配置（webpack.dev.config.js，webpack.prod.config.js）

## FYI

https://segmentfault.com/a/1190000005363030
https://www.qinshenxue.com/article/vue2-vue-router2-webpack4.html