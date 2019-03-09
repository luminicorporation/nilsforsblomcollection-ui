import React from 'react';
// import { Link } from 'gatsby';
import { css } from '@emotion/core';

import GreaterThanCaret from '../components/greaterThanCaret';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Content from '../components/content';
import { onMobile } from '../utils/onMobile';

const IndexPage = () => (
  <Layout>
    <Content>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1
        className="neotech-med"
        css={css`
          text-transform: uppercase;
          font-size: 56px;
          margin-bottom: 140px;
          color: #121212;
          ${onMobile(`
            margin-bottom: 45px;
            font-size: 2.1em;
            text-align: center;
          `)}
        `}
      >
        Lumini
        <br /> Corporation
      </h1>
      <hr
        css={css`
          height: 7px;
          background-color: #121212;
          margin-bottom: 100px;
          ${onMobile(`
            margin-bottom: 50px;
          `)}
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
            line-height: 1.6;
            ${onMobile(`
              width: 100%;
              margin-right: 0;
              font-size: 21px;
              text-align: center;
            `)}
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
