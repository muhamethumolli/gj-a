import React, { FC } from 'react';
import cx from 'classnames';
import { ContainerProps } from '../../interfaces';

const Container: FC<ContainerProps> = ({ children, className = '' }) => (
  <div className={cx('container mx-auto px-4', className)}>{children}</div>
);

export default Container;
