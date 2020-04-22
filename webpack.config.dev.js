import path from 'path';
import webpack from 'webpack';

module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: [path.resolve(__dirname, 'src/index'), 'webpack-hot-middleware/client'],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
    ]
  }

};
