/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Helps detect potential issues in your app
    images: {
      domains: [], // Add any external image domains here if you're using the `next/image` component
    },
    //output: "standalone", // Recommended for serverless deployment like Netlify
  };
  
  export default nextConfig;
  