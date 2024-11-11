/** @type {import('next').NextConfig} */
const nextConfig = {
  
    eslint: {
        ignoreDuringBuilds: true,
      },
      typescript: {
        ignoreBuildErrors: true,
      },
    "output": "export"
};

export default nextConfig;
 
