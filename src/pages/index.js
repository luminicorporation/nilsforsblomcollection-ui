import React from 'react';
// import { Link } from 'gatsby';
// import { css } from '@emotion/core';

import Layout from '../components/layout';
import SEO from '../components/seo';
import '../styles/index.scss';

const IndexPage = () => (
  <Layout
    header={{
      siteTitle: 'Nils Forsblom Collection',
      lead: 'The need and the search for balance. A singular view.',
    }}
  >
    <SEO
      title="Home"
      keywords={[`nils forsblom`, `fondazione`, `collection`]}
    />
    <article>
      <header>
        <img src="" alt="" />
        <p />
      </header>
      <p />
      <p />
    </article>
  </Layout>
);

export default IndexPage;
