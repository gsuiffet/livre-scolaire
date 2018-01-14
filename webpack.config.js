const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const dev = process.env.NODE_ENV === "dev";

let config = {
    devtool: dev ? 'cheap-eval-source-map' : false,
    watch : dev,
    entry: './public/renderdom.js',
    output: {
        path: __dirname+'/public/',
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer : {
        contentBase: path.join(__dirname, "./public/bundle"),
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
        port: 8080,
        compress: false,
        inline: true,
        overlay: true,
        historyApiFallback: true,
        hot: true,
        stats: 'errors-only'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['env', 'react']
                        }
                    }
                ]
            },
            {
                test: [/\.scss$/,/\.css$/],
                loader: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env' : {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
};

if (!dev) {
    config.plugins.push(new UglifyJsPlugin())
}

module.exports = config;