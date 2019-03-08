import React from 'react';
// import { Link } from 'gatsby';
import { css } from '@emotion/core';

import GreaterThanCaret from '../components/greaterThanCaret';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Content from '../components/content';

const IndexPage = () => (
  <Layout>
    <Content>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1
        css={css`
          text-transform: uppercase;
          // font-family: "neotech medium";
          // font-weight: 600;
        `}
      >
        Lumini
        <br /> Corporation
      </h1>
      <hr
        css={css`
          height: 7px;
          background-color: #121212;
        `}
      />
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <GreaterThanCaret />
        <p
          css={css`
            width: 56%;
            margin-right: 50px;
            font-size: 30px;
            font-family: 'opensans light';
            line-height: 1.6;
          `}
        >
          Theoretical science research for advanced technologies. We are
          developing foundational technologies, applying new thinking for
          near-future applications.
        </p>
      </div>
    </Content>
  </Layout>
);

export default IndexPage;
