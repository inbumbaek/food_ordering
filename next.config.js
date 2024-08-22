/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePattern: [
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'inbum-food-ordering.s3.amazonaws.com',
      },
    ]
  }
};

export default nextConfig;
