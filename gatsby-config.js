module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'j4bmp3cn7p2r',
        accessToken: '505a4954c197b3b6bb9d7063da859eea5d25eaa1bf65d133c090a89671a89cc5',
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`
  ],
}
