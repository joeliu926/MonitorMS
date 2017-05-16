/**
 * Created by AnThen on 2016-11-23.
 */

var webpack = require("webpack");
var webpackBase = require("./webpack.config.base.js");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('stylesheets/[name].css');
var extractLESS = new ExtractTextPlugin('stylesheets/[name].less');
var cfg = Object.assign(webpackBase, {
    devtool: "eval-source-map",
    cache: true,
    debug: true
});

//entry
Object.getOwnPropertyNames((webpackBase.entry || {})).map(function (name) {
    cfg.entry[name] = []
        //添加HMR文件
        .concat("webpack/hot/dev-server")
        //添加webpack-dev-server客户端
        .concat("webpack-dev-server/client?http://localhost:8080")
        .concat(webpackBase.entry[name])
});

cfg.output.publicPath='/dist';
//plugins
cfg.plugins = (webpackBase.plugins || []).concat(
    new webpack.optimize.OccurrenceOrderPlugin(),
    //添加HMR插件
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        output: {
            comments: false
        }
    })
)

module.exports = cfg;