import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const env = process.env.NODE_ENV || 'developpement';
const rootPath = path.resolve(__dirname, '..');
let entry;
let plugins = [];
if (env === 'production') {
  entry = ['babel-polyfill', path.join(rootPath, './src')];
  plugins = [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: { comments: false },
      compress: { warnings: false },
    }),

    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: '"production"' },
    }),

    new CopyWebpackPlugin([
      { from: path.join(rootPath, './src', 'index.html') },
      { from: path.join(rootPath, './src', 'assets', 'img', 'logo.png'), to: path.join(rootPath, './assets', 'img') },
    ]),
  ];
} else {
  entry = [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    'webpack/hot/only-dev-server',
    path.join(rootPath, './src'),
  ];

  plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([
      { from: path.join(rootPath, './src', 'index.html') },
      { from: path.join(rootPath, './src', 'assets', 'img', 'logo.png'), to: 'assets/img' },
    ]),
  ];
}

export default {
  entry,
  plugins,
  context: rootPath,
  output: {
    filename: 'bundle.js',
    path: path.join(rootPath, './static'),
    publicPath: '/',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(rootPath, './src'),
        loader: 'babel',
      },

      {
        test: /\.css$/,
        loaders: [
          'style',
          'css',
        ],
      },

      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'postcss',
          'sass',
        ],
      },

      {
        test: /\.(eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=fonts/[name].[ext]',
      },

      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=images/[name].[ext]',
      },

      {
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&name=fonts/[name].[ext]',
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/,
        loader: 'file?name=assets/img/[name].[ext]',
      },
    ],
  },

  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx',
    ],
  },

  postcss: () => [autoprefixer],
};
