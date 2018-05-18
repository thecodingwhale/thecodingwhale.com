module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CF_SPACE || 'j4bmp3cn7p2r',
        accessToken: process.env.CF_TOKEN || '505a4954c197b3b6bb9d7063da859eea5d25eaa1bf65d133c090a89671a89cc5'
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Libre Baskerville\:100`,
          `source sans pro\:300,400` // you can also specify font weights and styles
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet'
  ],
}
