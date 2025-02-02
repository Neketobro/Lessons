import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import TerserPlugin from "terser-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import path from "path";
import ImageMinimizerPlugin from "image-minimizer-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default (env, { mode = 'development' }) => {
    const isProd = mode === 'production';

    return {
        mode,
        entry: resolve(__dirname, "src", "script", "index.js"),
        output: {
            path: resolve(__dirname, "dist"),
            filename: "index.js",
            clean: true,
        },
        devtool: !isProd ? "source-map" : false,
        module: {
            rules: [{
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ["@babel/plugin-transform-runtime"],
                    },
                },
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sassOptions: {
                                style: `compressed`,
                                sourceMap: true,
                                quietDeps: true,
                            },
                        },
                    },
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: "asset",
            }],
        },
        optimization: {
            minimize: isProd,
            minimizer: [new TerserPlugin({
                parallel: true,
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }), new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ["gifsicle", { interlaced: true }],
                            ["jpegtran", { progressive: true }],
                            ["optipng", { optimizationLevel: 5 }],
                        ]
                    }
                }
            })
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: "lesson_23 dist",
                // scriptLoading: "defer",
                minify: true,
                filename: "index.html",
                favicon: "./dist/Favicon_48x48.png",
                template: resolve(__dirname, "src", "index.html"),
            }),
            new CopyPlugin({
                patterns: [
                    {
                        from: resolve(__dirname, "src", "public"),
                        to: resolve(__dirname, "dist"),
                    },
                ],
            })
        ],
        watchOptions: {
            aggregateTimeout: 600,
            poll: 1000,
            ignored: /node_modules/,
        },
        devServer: {
            static: {
                directory: path.join(__dirname, './dist'),
            },
            compress: true,
            port: 9000,
            hot: true,
            open: true
        }
    };
};