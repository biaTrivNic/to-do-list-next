const nextConfig = {
  async rewrites() {
    console.log('Rewrites function called'); 
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`, 
      },
    ];
  },
};

module.exports = nextConfig;
