import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import 'sanitize.css/sanitize.css';

import './index.scss'

const Header = () => (
  <div className="header">
    <div className="container">
      <h1 className="header__logo">
        <Link
          to="/"
          className="header__logo__name"
        >
          thecodingwhale
        </Link>
      </h1>
    </div>
  </div>
)

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div>
        thecodingwhale © 2018
      </div>
    </div>
  </footer>
);
const TemplateWrapper = ({ children }) => (
  <div className="template">
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div className="content">
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
