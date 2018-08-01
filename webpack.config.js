const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function() {
  return {
    entry: './client/src/index.js',
    output: {
      path: path.resolve(__dirname, 'server', 'static'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
        { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'], include: /node_modules\/bootstrap/ }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './client/public/index.html',
        inject: 'body'
      })
    ],
    devServer: {
      proxy: {
        '/api': 'http://localhost:8081'
      }
    }
  };
}
