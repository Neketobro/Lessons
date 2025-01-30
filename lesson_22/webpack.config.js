import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import TerserPlugin from "terser-webpack-plugin";
import { watch } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default (env, { mode = 'development' }) => {
    const isProd = mode === 'production';

    return {
        mode,
        entry: resolve(__dirname, "src", "index.js"),
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
                    }
                ]
            }],
        },
        optimization: {
            chunkIds: "named",
            splitChunks: {
                chunks: "all",
            },
            minimize: isProd,
            minimizer: [new TerserPlugin({
                parallel: true,
                terserOptions: {
                  format: {
                    comments: false,
                  },
                },
                extractComments: false,
              }),
            ]
        },
        watchOptions: {
            aggregateTimeout: 600,
            poll: 1000,
            ignored: /node_modules/,
        },
    };
};

// На основі одного з попередніх завдань зробити білд через Webpack. Що має робити білд:
// Оптимізація, конкатинація, мініфікація JS+
// Компіляція SCSS в CSS. Мініфікація CSS
// Вотчер
// За бажанням:
// Dev-server
// image-minimizer-webpack-plugin