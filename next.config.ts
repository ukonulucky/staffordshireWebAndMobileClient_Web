
// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:p*', // Rewrites requests to /api/* to the actual API endpoint
        destination: 'https://magzsalone-c6d08b8d094b.herokuapp.com/api/v1/:path*', // API backend URL
      },
    ];
  },
  images: {
    remotePatterns: [
     {
      protocol: "https",
      hostname: "res.cloudinary.com",
      port: '',
      pathname: '/dtxai4k4r/image/upload/**'
    },
    {
      protocol: "https",
      hostname: "media.istockphoto.com",
      port: '',
      pathname: '/id/**'
    }
      
    ],
  },
};






