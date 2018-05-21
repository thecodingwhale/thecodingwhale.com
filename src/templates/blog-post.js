import React, { Component} from 'react';
import Helmet from 'react-helmet'
import PropTypes from 'prop-types';

class BlogPost extends Component {
  render() {
    const {
      title,
      body
    } = this.props.data.contentfulBlogPost
    return (
      <div>
        <Helmet title={`${title} ${this.props.data.site.siteMetadata.title}`} />
        <div className="container">
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}} />
        </div>
      </div>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!){
    site {
      siteMetadata {
        title
      }
    },
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
