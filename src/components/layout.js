/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

// import Header from './header';
import Footer from './footer';
import '../styles/layout.scss';
import '../styles/background.scss';
import '../styles/typefaces.scss';
import css from '@emotion/css';
import { onMobile } from '../utils/onMobile';

const Layout = ({ children }) => (
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
    render={
      (/*data*/) => (
        <>
          {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
          <main
            css={css`
              padding-top: 140px;
              ${onMobile(`
                padding-top: 50px;
              `)}
            `}
          >
            {children}
          </main>
          <Footer />
        </>
      )
    }
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
