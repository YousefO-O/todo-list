import HtmlWebpackPlugin from "html-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
export default {

  module: {
    rules: [
        { test: /\.css$/, use: ['style-loader', 'css-loader'], },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/template.html',
    }),
  ],
  optimization: {
  minimizer: [
    new CssMinimizerPlugin(),
    ],
  },
};