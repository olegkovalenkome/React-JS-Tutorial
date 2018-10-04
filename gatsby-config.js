module.exports = {
  siteMetadata: {
    title: 'Design+Code',
    description: 'React JS for designers',
    keywords: 'react, gatsby, babel, html, css',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'f1v5jf59d5dh',
        accessToken: '31cbf073ec065a42982ce146e8ae430a57ceae756e224bc725871e9e74e27ad2',
      }
    }
  ],
}
