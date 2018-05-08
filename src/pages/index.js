import React from 'react'
import Link from 'gatsby-link'

const BlogPost = ({node}) => {
  return (
    <li>
      <img src={node.heroImage.responsiveResolution.src}/>
      <Link to={node.slug}><h3>{node.title}</h3></Link>
      <div>{node.body.childMarkdownRemark.excerpt}</div>
    </li>
  )
}
const IndexPage = ({data}) => (
  <ul className='blog-post'>
    {data.allContentfulBlogPost.edges.map((edge) => <BlogPost node={edge.node} />)}
  </ul>
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
              responsiveResolution(width: 300, height: 300) {
                src
              }
            }
          }
        }
    }
   }
`
