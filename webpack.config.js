const path = require('path');

const config = (webpackEnv) => {
    const development = webpackEnv === 'development';

    return {
        devtool: 'source-map',
        entry: './src/index.ts',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [
                {
                    test: /\.(ts)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                }],
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
        devServer: {
            disableHostCheck: true,
        },
    };
};

module.exports = (env, argv) => {
    return config(argv.mode);
};