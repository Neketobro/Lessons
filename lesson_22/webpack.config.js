import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

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
            }],
        },
    };
};