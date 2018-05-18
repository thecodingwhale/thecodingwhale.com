import React from 'react'
import Link, { navigateTo } from 'gatsby-link'

const BlogPost = ({node}) => {
  return (
    <div
      className="blog-post"
      onClick={() => navigateTo(node.slug)}
    >
      <div className="blog-post__image-wrapper">
        <img
          className="blog-post__image"
          src={node.heroImage.responsiveResolution.src}
        />
      </div>
      <div className="blog-post__content">
        <h3 className="blog-post__title">
          {node.title}
        </h3>
        <div>{node.body.childMarkdownRemark.excerpt}</div>
      </div>
    </div>
  )
}
const IndexPage = ({data}) => (
  <div className="container">
    {data.allContentfulBlogPost.edges.map((edge) => <BlogPost node={edge.node} />)}
  </div>
)

export default IndexPage

export const pageQuery = graphql`
   query pageQuery {
    allContentfulBlogPost (
    filter: {
      node_locale: {eq: "en-US"}
    },
    sort:{ fields: [publishDate], order: DESC }
    ) {
        edges {
          node {
            title
            slug
            body {
              childMarkdownRemark {
                excerpt
              }
            }
            heroImage {
              responsiveResolution(width: 150, height: 150) {
                src
              }
            }
          }
        }
    }
   }
`
