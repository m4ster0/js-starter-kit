import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../src/index.html')));

app.listen(port, () => console.log(`Listening on port ${port}...`));
