const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './src/main.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle_[hash].js'
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
                    name: 'assets/[name].[ext]'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                                                   fallback: 'style-loader',
                                                   use: 'css-loader'
                                               })
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
    plugins: [
        new HtmlWebpackPlugin({
                                  template: 'index.html',
                                  favicon: 'favicon.ico'
                              }),
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin(
            "styles_[contenthash].css"),
    ]
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool      = '#source-map';
    module.exports.output       = {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle_[chunkhash].js'
    };
    module.exports.entry.vendor = './src/vendor.js';
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins      = (module.exports.plugins || []).concat([
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
                                                                                                            }),
                                                                            new webpack.optimize.CommonsChunkPlugin({
                                                                                                                        name: "vendor",
                                                                                                                        filename: "vendor.bundle_[chunkhash].js"
                                                                                                                    })
                                                                        ])
}
