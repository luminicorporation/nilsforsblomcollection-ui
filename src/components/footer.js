import React, { useState } from 'react';
import { css } from '@emotion/core';
import cx from 'classnames';

import Content from './content';
import { useResizeEvent } from '../hooks/useResizeEvent';
import '../styles/footer.scss';

const List = ({ children }) => (
  <ul className="opensans-semibold horizontal-list">{children}</ul>
);

const Item = ({ children, className, ...props }) => (
  <li className={cx(className, 'horizontal-list_item')} {...props}>
    {children}
  </li>
);

const fixedStyles = css`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  const [isFixed, setIsFixed] = useState(false);
  useResizeEvent(() => {
    if (typeof document !== 'undefined') {
      setIsFixed(
        document.documentElement.clientHeight > document.body.clientHeight
      );
    }
  });

  return (
    <footer className="footer" css={isFixed ? fixedStyles : null}>
      <Content
        css={css`
          padding: 0;
          height: 4em;
          display: flex;
          align-items: center;
        `}
      >
        <List>
          <Item>© {new Date().getFullYear()} Lumini Corporation Inc.</Item>
          <Item className="hide-on-mobile">California, United States.</Item>
          <Item>
            <a href="mailto:info@lumini.me">info@lumini.me</a>
          </Item>
        </List>
      </Content>
    </footer>
  );
};

export default Footer;
