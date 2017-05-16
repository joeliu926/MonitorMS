/**
 * Created by AnThen on 2016-11-23.
 */
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
    devtool: 'eval-source-map',
    //插件项
    //plugins: [commonsPlugin],
    //页面入口文件配置
    //entry: [
    //    'webpack-dev-server/client?http://127.0.0.1:3000', // WebpackDevServer host and port
    //    'webpack/hot/only-dev-server',
    //    './src/js/index.js' // Your appʼs entry point
    //],
    entry: {
        index : './src/js/index.js',
        sub : './src/js/sub.js'
    },
    //入口文件输出配置
    output: {
        publicPath:'/',
        path: __dirname+'/dist/js',
        filename: '[name].js',
        chunkFilename: "[name].js"
    },
    module: {
        //加载器配置
        loaders: [
            {
                test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
                exclude: /(node_modules|bower_components)/,
                loaders: [
                    // 小于10KB的图片会自动转成dataUrl
                    'url?limit=10240&name=img/[hash:8].[name].[ext]',
                    'image?{bypassOnDebug:true, progressive:true,optimizationLevel:3,pngquant:{quality:"65-80",speed:4}}'
                ]
            },
            { test: /\.css$/,  exclude: /(node_modules|bower_components)/,loader: 'style-loader!css-loader' },
            { test: /\.scss$/, exclude: /(node_modules|bower_components)/, loader: 'style!css!sass?sourceMap'},
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015','react']
                }
            }
            //{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    //其它解决方案配置
    resolve: {
        extensions: ['', '.js', '.json', '.scss'],
        alias: { }
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    }
};