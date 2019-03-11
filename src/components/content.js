import React from 'react';
import cx from 'classnames';

import '../styles/content.scss';

const Content = ({ children, className, ...props }) => (
  <section className={cx('content', className)} {...props}>
    {children}
  </section>
);

export default Content;
