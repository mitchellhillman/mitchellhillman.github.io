const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    watch: true,
    mode: 'development',
    module: {
        rules: [
            {test: /\.vue$/, loader: 'vue-loader'},
            {test: /\.js$/, loader: 'babel-loader'},
            {test: /\.css$/, use: [ 'vue-style-loader', 'css-loader']}
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}