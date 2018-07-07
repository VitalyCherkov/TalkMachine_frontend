const path = require('path');
const webpack = require('webpack');
const publicPath = '/dist/build';
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.jsx',

    devtool: 'cheap-module-source-map',

    plugins: [
        new HtmlWebpackPlugin({
            title: 'TalkMachine'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    output: {
        path: path.join(__dirname, publicPath),
        filename: '[name].bundle.js',
        publicPath: publicPath,
        sourceMapFilename: '[name].map',
    },

    devServer: {
        port: 3000,
        host: 'localhost',
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',
        publicPath: publicPath,
        contentBase: path.join(__dirname, publicPath),
        hot: true,
    },

    module: {
        rules: [
            {
                test: /\css$/,
                loaders: ['style-loader', 'css-loader'],
                include: /node_modules/,
            },
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

    mode: 'development'
};