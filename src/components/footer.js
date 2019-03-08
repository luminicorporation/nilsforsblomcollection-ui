import React from 'react';

import 'styled-components/macro';

const Footer = () => {
  return (
    <footer
      css={`
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
            &:not(:first-child) {
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
