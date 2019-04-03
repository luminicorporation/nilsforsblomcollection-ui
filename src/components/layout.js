/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';
import Copyright from './copyright';
import '../styles/reset.scss';
import '../styles/background.scss';
import '../styles/typefaces.scss';
import '../styles/layout.scss';

// To activate an overlay to check the layout vs an image, uncomment:
// import '../styles/overlay.scss';

const Layout = ({ header = {}, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} {...header} />
        <main className="main">{children}</main>
        <Footer />
        <Copyright />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
