import React, { useState } from 'react';
import { css } from '@emotion/core';

import Content from './content';
import { useResizeEvent } from '../hooks/useResizeEvent';
import { List, Item } from './common/horizontalList';
import { Anchor } from './common/anchor';
import '../styles/footer.scss';

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
        `}
      >
        <article
          css={css`
            height: 4em;
            display: flex;
            align-items: center;
          `}
        >
          <List>
            <Item>© {new Date().getFullYear()} Lumini Corporation Inc.</Item>
            <Item className="hide-on-mobile">California, United States.</Item>
            <Item>
              <Anchor href="mailto:info@lumini.me">info@lumini.me</Anchor>
            </Item>
          </List>
        </article>
      </Content>
    </footer>
  );
};

export default Footer;
