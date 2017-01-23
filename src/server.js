import path from 'path';
import express from 'express';
import compression from 'compression';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack/client.config.babel';

const env = process.env.NODE_ENV || 'developpement';
const port = process.env.PORT || 8080;
const rootPath = path.resolve(__dirname, '..');
const app = express();

app.use(compression());

function renderPage() {
  return (`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
      </head>
      <body>
        <div id="root"></div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `);
}

if (env === 'developpement') {
  const compiler = webpack(config);
  const middleware = webpackDevMiddleware(compiler, {
    publicPath: `http://locahost:8080${config.output.publicPath}`,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', (req, res) => {
    res.write(renderPage());
    res.end();
  });
} else {
  app.use(express.static(`${rootPath}/static`));
  app.get('*', (req, res) => {
    res.write(renderPage());
    res.end();
  });
}

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err); // eslint-disable-line
  }
  console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port); // eslint-disable-line
});
