// const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // i18n,
    trailingSlash: true,
    experimental: {
        images: {
            allowFutureImage: true,
        },
    },
    images: {
        domains: ["user-images.githubusercontent.com"],
    },
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false };

        return config;
    },
    // exportPathMap: async function (
    //     defaultPathMap,
    //     { dev, dir, outDir, distDir, buildId }
    // ) {
    //     return {
    //         "/": { page: "/" },
    //         "/career": { page: "/career" },
    //         "/contact": { page: "/contact" },
    //         "/service_and_portfolio": { page: "/service_and_portfolio" },
    //         "/team_culture": { page: "/team_culture" },
    //     };
    // },
};

module.exports = nextConfig;
