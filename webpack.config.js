const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const publicPath = '/dist/build';


module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, publicPath),
        filename: '[name].bundle.js',
        publicPath: publicPath
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            },
            {
                test: /\.js|.jsx$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        contentBase: path.join(__dirname, publicPath),
        port: 3000,
        compress: true,
        historyApiFallback: true,
        hot: true,
        hotOnly: true,
        open: true,
        publicPath: publicPath,
    },
    plugins: [
        new CleanWebpackPlugin([publicPath]),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({

            inject: false,
            template: require('html-webpack-template'),

            title: 'TalkMachine',
            appMountId: 'root',
        }),
    ],
    mode: 'development'
};