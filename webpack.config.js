import { resolve as _resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import DotenvWebpackPlugin from 'dotenv-webpack';
import EslingPlugin from 'eslint-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseConfig = {
  entry: _resolve(__dirname, './src/index'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.ts$/i,
        use: ['ts-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  output: {
    filename: 'bundle.js',
    path: _resolve(__dirname, './dist'),
  },
  plugins: [
    new DotenvWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: _resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new EslingPlugin({ extensions: 'ts' }),
  ],
};

export default async ({ mode }) => {
  const isProductionMode = mode === 'prod';
  const envConfig = isProductionMode
    ? await import('./webpack.prod.config.js')
    : await import('./webpack.dev.config.js');
    
  return merge(baseConfig, envConfig);
};
