import fs from 'fs';
import path from 'path';

const rootPath = path.resolve(__dirname, '..');
export default {
  context: rootPath,
  entry: path.join(rootPath, './src/server.js'),
  output: {
    filename: 'server',
    path: path.join(rootPath, './bin'),
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },

  externals: fs.readdirSync(path.join(rootPath, './node_modules'))
    .filter(element => element !== '.bin')
    .reduce((modules, name) => {
      const newModules = modules;
      newModules[name] = `commonjs ${name}`;
      return newModules;
    }, {}),

  target: 'node',
  node: {
    __filename: false,
    __dirname: false,
  },
};
