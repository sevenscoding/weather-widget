const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    mode: "development",

    entry: "./src/app/index.ts",

    output: {
        filename: "weather-widgets.js",
        path: path.resolve(__dirname, "dist"),

        library: "WeatherWidget",
        libraryTarget: "window",
        clean: true
    },

    resolve: {
        extensions: ['.ts', '.js', '.vue'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.ts$/,
                loader: "ts-loader",
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },

    plugins: [new VueLoaderPlugin()],

    devServer: {
        static: {
            directory: path.join(__dirname),
            watch: true
        },
        port: 3000,
        open: ['/test.html'],
        hot: false,
        liveReload: true,
        devMiddleware: {
            writeToDisk: true
        },
        watchFiles: ['src/**/*', 'test.html']
    }
};