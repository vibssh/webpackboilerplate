// webpack v4
const {resolve} = require('path');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HandlebarsPlugin = require('precompile-handlebars');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const KssWebpackPlugin = require('kss-webpack-plugin');
const KssConfig = {
  title: 'JF Component Library',
  source: './src/scss/',
  destination:'./src/styleguide/',
  css: '../../style.css',
  builder:'./jf_styleguide_theme/kss_styleguide/custom-template/',
}

module.exports = {
  entry: { main: './src/js/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  stats: {
    children: false,
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './src',
    open: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    port: '8080',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-hot-loader',
           MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },

  //Define all Webpack Plugins here
  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html'
    }),
    new StyleLintPlugin({
      configFile: './stylelint.config.js',
      files: './src/scss/*.scss',
      syntax: 'scss'
    }),
    new KssWebpackPlugin(KssConfig),
    new HandlebarsPlugin([
      {
          inputDir: "./jf_styleguide_theme/kss-styleguide/custom-template/",
          outputFile: "./jf_styleguide_theme/kss-styleguide/custom-template/builder.js"
      }
    ])
  ]
};