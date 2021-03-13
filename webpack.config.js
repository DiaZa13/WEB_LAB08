//CONFIGURACION WEBPACK
const path = require('path');
const miniCssExtractplugin = require('mini-css-extract-plugin');
const htmlWebpackplugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool:false,
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    //Plugins
    plugins: [
        new miniCssExtractplugin({ filename: "index.bundle.css" }),
        new htmlWebpackplugin({
            template: "./src/index.html",
            filename: "index.html",
            chunks: ["index"]
        })
    ],
    module:{
        rules: [
            {
                test: /\.scss$/,
                use: [miniCssExtractplugin.loader,'css-loader','sass-loader'],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(svg|woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts'
                        }
                    }
                ]
            },
            /*{
                test: /\.(svg|png|jpg|gif)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        outputPath: "img",
                        name: "[name]-[hash].[ext]",
                    }
                }
            },
            {

                test: /\.mp3$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        outputPath: "audio",
                        name: "[name]-[hash].[ext]",
                    }
                }

            },*/
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /(node_modules)/,
            },
        ],
    },
};