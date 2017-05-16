/**
 * Created by AnThen on 2016-11-23.
 */
 'use strict';
let webpack = require("webpack");
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractCSS = new ExtractTextPlugin('css/[name].css');
let extractLESS = new ExtractTextPlugin('css/[name].less');
let path = require('path');
module.exports = {
    entry: {
        "index": "./src/js/index.js",
         vendor: ['react', 'react-dom', 'react-router','jquery']
    },
    output: {
        filename: "js/[name].js",
        path: __dirname + "/dist"
    },

    module: {
        loaders: [
            {
                test   : /\.woff|\.woff2|\.svg|.eot|\.ttf/,
                loader : 'url?prefix=font/&limit=10000'
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                //exclude: /(node_modules|bower_components)/,
                loaders: [
                    // 小于10KB的图片会自动转成dataUrl
                    'url?limit=10240&name=img/[hash:8].[name].[ext]',
                    'image?{bypassOnDebug:true, progressive:true,optimizationLevel:3,pngquant:{quality:"65-80",speed:4}}'
                ]
            },
            //模块加载样式
            { test: /\.css$/,
            // exclude: /(node_modules|bower_components)/,
              loader: 'style-loader!css-loader' },
            {
                test: /.jsx?$/,
                loader: "babel",
                query: {
                    presets: ["react", "es2015"],
                    cacheDirectory: true
                },
                exclude: /node_modules|bower_components/
            }
        ]
    },
    //其它解决方案配置
    resolve: {
        extensions: ['', '.js', '.json', '.scss','.css'],
        alias: {
            'jquery': path.resolve(__dirname, './src/js/lib/jquery.min.js'),
            'module': path.resolve(__dirname, './src/js/module'),
            'css': path.resolve(__dirname, './src/css'),
            'js': path.resolve(__dirname, './src/js'),
            'coreUtil': path.resolve(__dirname, './src/js/utils/coreUtil.js'),
            'constant': path.resolve(__dirname, './src/js/utils/constant.js')
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery",
            "_":"coreUtil",
            "CONSTANT":"constant"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "js/vendor.js"
        })
        //,
        //extractCSS
    ]
}
