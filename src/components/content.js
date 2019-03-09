import React from 'react';
import { css } from '@emotion/core';
import { onMobile } from '../utils/onMobile';

const base = css`
  margin: 0 auto;
  max-width: 1150px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  ${onMobile(`
    max-width: 90%;
  `)}
`;

const Content = ({ children }) => (
  <div css={base} className="content">
    {children}
  </div>
);

export default Content;
