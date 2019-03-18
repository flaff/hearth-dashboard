const path = require('path');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');
//
// module.exports = (baseConfig, env, config) => {
//     config.module.rules.push({
//         test: /\.tsx?$/,
//         include: path.resolve(__dirname, "../src"),
//         loader: require.resolve('babel-loader'),
//         options: {
//             presets: [['react-app', { flow: false, typescript: true }]]
//         }
//     });
//
//     config.plugins.push(new TSDocgenPlugin());
//     return config;
// };

module.exports = (baseConfig, env, config) => {
    config.module.rules.push({
        test: /\.tsx?$/,
        include: path.resolve(__dirname, "../src"),
        use: [
            {
                loader: require.resolve('babel-loader'),
                options: {
                    presets: [['react-app', { flow: false, typescript: true }]]
                }
            }
        ],
    });

    config.resolve.extensions.push(".ts", ".tsx");
    config.plugins.push(new TSDocgenPlugin());

    return config;
};