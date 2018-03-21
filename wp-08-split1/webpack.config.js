const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    entry: {
        index: './src/index.js',
        another: './src/another-module.js',
        commons:['lodash']
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Code Splitting'
        }),
        // webpack.optimize.CommonsChunkPlugin has been removed, please use config.optimization.splitChunks instead.
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:'common' // 指定公共bundle的名称
        // }),
    ],

    // webpack.optimize.CommonsChunkPlugin has been removed, please use config.optimization.splitChunks instead.
    // Webpack 3.X - 4.X 升级记录  http://blog.csdn.net/qq_16559905/article/details/79404173
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "commons",
                    chunks: "all"
                }
            }
        }
    },

    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    }
};