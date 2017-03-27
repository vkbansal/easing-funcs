/* eslint-disable */
const webpack = require('webpack');
const path  = require('path');

const PROD = process.env.NODE_ENV === 'production';

const config = {
    entry: ["./preview/index.js"],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./preview"),
        publicPath: "/",
        sourceMapFilename: "bundle.js.map"
    },
    resolve: {
        modules: [
            path.resolve(__dirname),
            'node_modules'
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'react',
                            ['env', {
                                modules: false,
                                targets: {
                                    browsers: 'Edge >= 12, FireFox >= 38, Chrome >= 47, Opera >= 34, Safari >= 9'
                                }
                            }],
                            'babili'
                        ]
                    }
                }],
                include: [
                    path.resolve(__dirname, './src'),
                    path.resolve(__dirname, './preview')
                ]
            }
        ]
    },
    plugins: []
};

!PROD && (config.devtool = "source-map");

PROD && config.plugins.push(
    new webpack.DefinePlugin({
        "process.env": {
            "NODE_ENV": JSON.stringify("production")
        }
    })
);

module.exports = config;
