// const isProduction = process.env.NODE_ENV === 'production';
// const REPO_NAME = 'notion-javascript-blog';

// basePath: isProduction ? `/${REPO_NAME}` : '',
// assetPrefix: isProduction ? `/${REPO_NAME}/` : '',

module.exports = {
  output: 'export' && 'standalone',
  distDir: 'out',
  images: {
    unoptimized: true,
    domains: [
      's3.us-west-2.amazonaws.com', // Images coming from Notion
      'via.placeholder.com', // for articles that do not have a cover image
      'images.unsplash.com', // For blog articles that use an external cover ima ge
      'pbs.twimg.com', // Twitter Profile Picture
      'dwgyu36up6iuz.cloudfront.net',
      'cdn.hashnode.com',
      'res.craft.do',
      'res.cloudinary.com',
      'nextjs-notion-blog-starter.vercel.app',
      'prod-files-secure.s3.us-west-2.amazonaws.com'
    ]
  }
};
