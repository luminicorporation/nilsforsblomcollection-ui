import React from 'react';
import { css } from '@emotion/core';

import Content from './content';

const Footer = () => {
  return (
    <footer
      css={css`
        background-color: #121212;
        .content {
          padding: 0;
          height: 4em;
          display: flex;
          align-items: center;
          ul {
            padding: 0;
            margin: 0;
            text-transform: uppercase;
            list-style-type: none;
            color: white;
            font-size: 12px;
            font-family: 'opensans semibold';
            li {
              display: inline;
              &:not(:first-of-type) {
                margin-left: 20px;
              }
              a:link,
              a:visited,
              a:hover,
              a:active {
                color: white;
              }
            }
          }
        }
      `}
    >
      <Content>
        <ul>
          <li>© {new Date().getFullYear()} Lumini Corporation Inc.</li>
          <li>San Diego, California</li>
          <li>
            <a href="mailto:info@lumini.me">info@lumini.me</a>
          </li>
        </ul>
      </Content>
    </footer>
  );
};

export default Footer;
