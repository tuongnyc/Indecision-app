// entry point is! (i.e app.js) -> output 
// webpack.js.org for resource! -> documentation
// this file is in NodeJS.

const path = require('path');

const outputpath = path.join(__dirname, 'public');

// node thing!
module.exports = {
    // webpack configuration details
    entry: './src/app.js',   // source entry, where it should start!
    output: {  // output must be an object
        path: outputpath,   // this is the absolute path!
        filename: 'bundle.js'   // common for webpack - outputfile
    },
    // contain an array of rules!
    module: {
        rules: [
        {  // single loader
            loader: 'babel-loader',
            test: /\.js$/,  // load any .js file
            exclude: /node_modules/  // do not run bable though node_modules
        } , 
        {
        test: /\.s?css$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
            ]
        }
        ]
    },
    devtool: 'cheap-module-eval-source-map',   // source map!
    // devServer
    devServer: {
        contentBase: outputpath
    }
};


