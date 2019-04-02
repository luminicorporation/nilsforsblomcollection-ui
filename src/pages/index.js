import React from 'react';
// import { Link } from 'gatsby';
import { css } from '@emotion/core';

import GreaterThanCaret from '../components/greaterThanCaret';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Content from '../components/content';
import '../styles/index.scss';
// import { Anchor } from '../components/common/anchor';

// const NoWrap = p => <span style={{ whiteSpace: 'nowrap' }}>{p.children}</span>;

const IndexPage = () => (
  <Layout>
    <Content>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1 className="neotech-med title">
        Nils Forsblom
        <br /> Collection
      </h1>
      <hr className="horizontal-separator" />
      <article
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <GreaterThanCaret />
        <div className="paragraph">
          <p>
            <strong>Nils Forsblom Collection</strong>
          </p>
          <p>Coming soon...</p>
          {/* <p className="paragraph">
            Theoretical science research for advanced technologies. We are
            developing foundational technologies, applying new thinking for{' '}
            <NoWrap>near-future</NoWrap> applications.
          </p>
          <p>
            Advancing key research areas: Mobile computing, Camera computing,
            Mobile sensors, Artificial intelligence, Cloud automation, Machine
            learning, Neural networks, and more.
          </p>
          <p>
            Learn more about Nils Forsblom Collection Research:{' '}
            <Anchor href="mailto:info@nilsforsblomcollection.org">info@nilsforsblomcollection.org</Anchor>.
          </p> */}
        </div>
      </article>
    </Content>
  </Layout>
);

export default IndexPage;
