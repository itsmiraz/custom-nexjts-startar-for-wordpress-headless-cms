/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.WORDPRESS_HOSTNAME,
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: 'beta.passionbits.io',
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
