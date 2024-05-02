/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/v2",
      },
    ];
  },
};

export default nextConfig;
