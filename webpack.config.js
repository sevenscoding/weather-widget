/* eslint-env node */

const path = require('path')

const dotenv = require('dotenv')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')

dotenv.config()

module.exports = {
  mode: 'development',

  entry: './src/app/index.ts',

  output: {
    filename: 'weather-widgets.js',
    path: path.resolve(__dirname, 'dist'),

    library: 'WeatherWidget',
    libraryTarget: 'window',
    clean: true
  },

  resolve: {
    extensions: ['.ts', '.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              reactivityTransform: true
            }
          }
        ]
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.OPEN_WEATHER_KEY': JSON.stringify(process.env.OPEN_WEATHER_KEY)
    })
  ],

  experiments: {
    topLevelAwait: true
  },

  devServer: {
    static: {
      directory: path.join(__dirname),
      watch: true
    },
    port: 3000,
    open: ['/test.html'],
    hot: false,
    liveReload: true,
    devMiddleware: {
      writeToDisk: true
    },
    watchFiles: ['src/**/*', 'test.html']
  }
}
