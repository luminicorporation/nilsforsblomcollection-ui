import React from 'react';
import 'styled-components/macro';

const Footer = () => {
  return (
    <footer>
      <ul
        css={`
          padding: 0;
          margin: 0;
          text-transform: uppercase;
          list-style-type: none;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          li {
            &:not(:first-child) {
              margin-left: 20px;
            }
          }
        `}
      >
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
