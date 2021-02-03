import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';
import cx from 'classnames';

const CustomLink: FC<LinkProps> = ({ children, ...props }) => {
  const { asPath } = useRouter();

  return (
    <li
      className={cx('pb-4 px-4 text-3xl text-gray-400 leading-6 ', {
        'text-yellow-600 border-b-4 border-yellow-600': asPath === props.href
      })}
    >
      <Link {...props}>
        <a>{children}</a>
      </Link>
    </li>
  );
};

export default CustomLink;
