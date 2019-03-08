import React from 'react';
import { css } from '@emotion/core';

import Content from './content';

const Wrapper = ({ children }) => (
  <footer
    css={css`
      background-color: #121212;
      .content {
        padding: 0;
        height: 4em;
        display: flex;
        align-items: center;
      }
    `}
  >
    <Content>{children}</Content>
  </footer>
);

const List = ({ children }) => (
  <ul
    className="opensans-semibold"
    css={css`
      padding: 0;
      margin: 0;
      text-transform: uppercase;
      list-style-type: none;
      color: white;
      font-size: 12px;
    `}
  >
    {children}
  </ul>
);

const Item = ({ children }) => (
  <li
    css={css`
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
    `}
  >
    {children}
  </li>
);

const Footer = () => {
  return (
    <Wrapper>
      <List>
        <Item>© {new Date().getFullYear()} Lumini Corporation Inc.</Item>
        <Item>San Diego, California</Item>
        <Item>
          <a href="mailto:info@lumini.me">info@lumini.me</a>
        </Item>
      </List>
    </Wrapper>
  );
};

export default Footer;
