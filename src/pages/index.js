import React from 'react';
// import { Link } from 'gatsby';
import { css } from '@emotion/core';

import GreaterThanCaret from '../components/greaterThanCaret';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Content from '../components/content';
import '../styles/index.scss';

const IndexPage = () => (
  <Layout>
    <Content>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1 className="neotech-med title">
        Lumini
        <br /> Corporation
      </h1>
      <hr className="horizontal-separator" />
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <GreaterThanCaret />
        <p className="paragraph">
          Theoretical science research for advanced technologies. We are
          developing foundational technologies, applying new thinking for
          near-future applications.
        </p>
      </div>
    </Content>
  </Layout>
);

export default IndexPage;
