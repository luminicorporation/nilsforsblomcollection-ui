import React from 'react';
import { css } from '@emotion/core';

const Footer = () => {
  return (
    <footer
      css={css`
        display: flex;
        align-items: center;
        height: 6em;
        background-color: #121212;
        ul {
          padding: 0;
          margin: 0;
          text-transform: uppercase;
          list-style-type: none;
          color: white;
          li {
            display: inline;
            &:not(:first-of-type) {
              margin-left: 20px;
            }
          }
        }
      `}
    >
      <ul>
        <li>© {new Date().getFullYear()} Lumini Corporation Inc.</li>
        <li>San Diego, California</li>
        <li>
          <a href="mailto:info@lumini.me">info@lumini.me</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
