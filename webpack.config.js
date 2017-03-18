const path    = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        //publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {}
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/[name].[ext]',
                    //publicPath: './src',
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map',
    plugins:[
        new HtmlWebpackPlugin({
            template: 'index.html',
            favicon: 'favicon.ico'
        }),
        new webpack.NamedModulesPlugin()
    ]
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
                                                                       new webpack.DefinePlugin({
                                                                           'process.env': {
                                                                               NODE_ENV: '"production"'
                                                                           }
                                                                       }),
                                                                       new webpack.optimize.UglifyJsPlugin({
                                                                           sourceMap: true,
                                                                           compress: {
                                                                               warnings: false
                                                                           }
                                                                       }),
                                                                       new webpack.LoaderOptionsPlugin({
                                                                           minimize: true
                                                                       })

                                                                   ])
}
