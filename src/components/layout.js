/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import cx from 'classnames';

// import Header from './header';
import Footer from './footer';
import '../styles/layout.scss';
import '../styles/background.scss';
import '../styles/typefaces.scss';
import css from '@emotion/css';
import { useResizeEvent } from '../hooks/useResizeEvent';
import { isMobile } from 'react-device-detect';

// Add classes to the body to be able to deferintiate the type of device reading
// the screen. We only need this component in the Layout because the rest
// should be handled with CSS, no need to use React for simple style updates.
const Media = () => {
  useResizeEvent(() => {
    document.body.className = cx({
      'device-mobile': isMobile,
    });
  });
  return null;
};

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
          <Media />
          {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
          <main
            css={css`
              padding-top: 140px;
              .device-mobile & {
                padding-top: 50px;
              }
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
