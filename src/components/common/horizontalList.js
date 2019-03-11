import React from 'react';
import cx from 'classnames';

export const Item = ({ children, className, ...props }) => (
  <li className={cx(className, 'horizontal-list_item')} {...props}>
    {children}
  </li>
);

export const List = ({ children }) => (
  <ul className="opensans-semibold horizontal-list">{children}</ul>
);
