/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "auebmzxwivh6lg2k.public.blob.vercel-storage.com",
      },
    ],
  },
};

module.exports = nextConfig;
