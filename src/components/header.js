import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import '../styles/header.scss';

const Header = ({ siteTitle, lead = '' }) => (
  <header className="site-header">
    <h1 className="site-header_title">
      <Link
        to="/"
        className="site-header_link"
        style={{
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
    {lead !== '' && <p className="site-header_lead">{lead}</p>}
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
