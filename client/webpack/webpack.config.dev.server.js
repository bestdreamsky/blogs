var path = require('path')
var webpack = require('webpack')

module.exports = {
    name: "server-side rendering",
    context: path.join(__dirname, "../"),
    target: "node",
    entry: {
        server: ['babel-polyfill','./src/server.js']
    },
    output: {
        path: './dist',
        filename: "server.js",
        publicPath: "/",
        libraryTarget: "commonjs2"
    },
    plugins: [
        new webpack.DefinePlugin({
            'isServer': true,
            'isClient': false,
            'process.env':{
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new webpack.IgnorePlugin(/vertx/)
    ],
    module: {
        loaders: [
            {
                test: /\.js$|\.jsx$/,
                loader: 'babel',
                query: {
                    "presets": ["es2015", "react", "stage-0"],
                    "plugins":["transform-decorators-legacy","syntax-async-functions"]
                },
                include: path.join(__dirname, '..', 'src'),
                exclude: /node_modules/
            },
            { test: /\.json$/, loader: "json-loader" },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'url?limit=10000&name=images/[hash:8].[name].[ext]',
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
        modulesDirectories: [
            "src", "node_modules"
        ]
    }
}