/**
 * Created by AnThen on 2016-11-24.
 */
var path = require("path");
var webpack = require("webpack");
var webpackDevServer = require("webpack-dev-server");
var webpackCfg = require("./webpack.config.hot.js");
var compiler = webpack(webpackCfg);
var filesOpt = require("./filesOpt.js");
filesOpt.copyFolder(path.resolve(__dirname,'./src/js/lib/bootstrap/css'),path.resolve(__dirname,'./dist/js/lib/bootstrap/css'))
filesOpt.copyFolder(path.resolve(__dirname,'./src/js/lib/bootstrap/fonts'),path.resolve(__dirname,'./dist/js/lib/bootstrap/fonts'))
filesOpt.copyFolder(path.resolve(__dirname,'./src/js/lib/bootstrap/theme/dark'),path.resolve(__dirname,'./dist/js/lib/bootstrap/theme/dark'))
filesOpt.copyFolder(path.resolve(__dirname,'./src/js/lib/bootstrap/fonts'),path.resolve(__dirname,'./dist/js/lib/bootstrap/theme/dark/fonts'))
filesOpt.copyFile(path.resolve(__dirname,'./src/js/lib/jquery-1.8.3.min.js'),path.resolve(__dirname,'./dist/js'))


//init server
var app = new webpackDevServer(compiler, {
    //注意此处publicPath必填
    publicPath: webpackCfg.output.publicPath
});

app.listen(8080, "localhost", function (err) {
    if (err) {
        console.log(err);
    }
});

console.log("listen at http://localhost:8080");