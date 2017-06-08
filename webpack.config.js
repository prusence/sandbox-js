module.exports = {
    entry: { app: './app.ts', },
    output: { filename: 'app.js' },

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
}