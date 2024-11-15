/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          //apply the temporay storage to all pages
          source: '/(.*)', // pages
          headers: [
            {
              key: 'Cache-Control',
              // value: 'public, max-age=3600, must-revalidate', // Temporary storage for none houe
              value: 'public, max-age=10, must-revalidate', // Temporary storage for none houe
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  