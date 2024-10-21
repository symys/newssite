/** @type {import('next').NextConfig} */
const nextConfig = {
    // provides to upload images from outsource
    images: {
        domains: ['images-cdn.trtworld.com', 'cdn-i.pr.trt.com.tr']
    },
    eslint:{
        ignoreDuringBuilds: true,
    }
};

export default nextConfig;
