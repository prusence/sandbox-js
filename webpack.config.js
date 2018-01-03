var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var path = require('path')

module.exports = {
    entry: {
        app: './src/ts/app.ts',
    },
    output: { 
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js' 
    },

    // resolve TypeScript and Vue file
    resolve: {
        extensions: ['*', '.ts', '.vue', '.js']
    },

    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                esModule: true
            }
        },
        {
            test: /\.ts$/,
            exclude: /\node_modules/,
            loader: 'ts-loader',
            options: {
                appendTsSuffixTo: [/\.vue$/]
            }
        }]
    },

    devServer: {
        contentBase: __dirname + '/public',
        open: true,
        hot: true,
        inline: true,
        port: 8081,
    },

    plugins: [
        new CopyWebpackPlugin([
            { from: './src/index.html'},
        ]),
        new webpack.HotModuleReplacementPlugin()
    ]
}