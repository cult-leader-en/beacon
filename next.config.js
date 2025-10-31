/** @type {import('next').NextConfig} */
const repoName = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',            // required for static export
  basePath: repoName,
  assetPrefix: repoName ? `${repoName}/` : '',
  reactStrictMode: true
  // REMOVE experimental.appDir entirely
};

module.exports = nextConfig;
