/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 이 줄을 주석 처리하거나 제거
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  reactStrictMode: true,
  swcMinify: true, // SWC 미니파이어 사용
  compiler: {
    // SWC 컴파일러 사용
    styledComponents: false, // 필요한 경우 true로 설정
  },
}

const path = require('path');

module.exports = {
  ...nextConfig,
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};
