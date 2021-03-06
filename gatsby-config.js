module.exports = {
  pathPrefix: '/insta-aesthetic',
  siteMetadata: {
    title: 'insta-aesthetic',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp', // Needed for dynamic images
    'gatsby-plugin-svgr',
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: true, // use prettier to format JS code output (default)
        svgo: true, // use svgo to optimize SVGs (default)
        svgoConfig: {
          plugins: [
            { removeViewBox: true }, // remove viewBox when possible (default)
            { cleanupIDs: false }, // remove unused IDs and minify remaining IDs (default)
          ],
        },
      },
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
