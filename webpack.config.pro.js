/**
 * Created by AnThen on 2016-11-23.
 */
'use strict';
let path = require("path");
let webpack = require("webpack");
let webpackBase = require("./webpack.config.base.js");
let filesOpt = require("./filesOpt.js");

filesOpt.copyFile(path.resolve(__dirname,'./src/js/lib/jquery-1.8.3.min.js'),path.resolve(__dirname,'./dist/js'))
filesOpt.copyReplaceFile(path.resolve(__dirname,'./index.html'),path.resolve(__dirname,'./dist'))

let cfg = Object.assign(webpackBase, {
});
//entry
Object.getOwnPropertyNames((webpackBase.entry || {})).map(function (name) {
    cfg.entry[name] = [].concat(webpackBase.entry[name])
});

//plugins
cfg.plugins = (webpackBase.plugins || []).concat(
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
)

module.exports = cfg;