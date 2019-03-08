import React from 'react';
// import { Link } from 'gatsby';
import { css } from '@emotion/core';

import GreaterThanCaret from '../components/greaterThanCaret';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1
      css={css`
        // font-family: "neotech medium";
        // font-weight: 600;
      `}
    >
      Lumini Corporation
    </h1>
    <hr />
    <GreaterThanCaret />
    <p>
      Theoretical science research for advanced technologies. We are developing
      foundational technologies, applying new thinking for near-future
      applications.
    </p>
  </Layout>
);

export default IndexPage;
