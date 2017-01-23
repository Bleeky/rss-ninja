import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';

const env = process.env.NODE_ENV || 'developpement';
const rootPath = path.resolve(__dirname, '..');
let entry;
let plugins = [];
if (env === 'production') {
  entry = path.join(rootPath, './src');
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
  ];
} else {
  entry = [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    'webpack/hot/only-dev-server',
    path.join(rootPath, './src'),
  ];

  plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
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
