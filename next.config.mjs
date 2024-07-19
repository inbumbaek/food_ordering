/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePattern: [
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      }
    ]
  }
};

export default nextConfig;
