// /** @type {import('next').NextConfig} */
// module.exports = {
//   reactStrictMode: true,
// }


const webpack = require('webpack');
module.exports = {
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }))
        return config;
    }}