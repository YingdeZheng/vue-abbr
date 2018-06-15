var path = require('path')
// var webpack = require('webpack')
// var entries = require('./entries')
//
// var multiEntry = {}
// entries.forEach(function (entry) {
//     multiEntry[entry] = path.resolve(__dirname, entry)
// })

// This config for building examples
module.exports = {
    entry: {
        app: path.resolve(__dirname, 'main.js'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js',
            'vue-abbr': path.resolve(__dirname, '../dist/vue-abbr.min.js')
        }
    },
    devtool: '#source-map'
}
