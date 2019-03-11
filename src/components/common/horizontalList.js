import React from 'react';
import cx from 'classnames';

export const Item = ({ children, className, ...props }) => (
  <li className={cx(className, 'horizontal-list_item')} {...props}>
    {children}
  </li>
);

export const List = ({ children, className, ...props }) => (
  <ul
    className={cx('opensans-semibold', 'horizontal-list', className)}
    {...props}
  >
    {children}
  </ul>
);
