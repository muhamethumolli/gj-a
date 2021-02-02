import React, { FC } from 'react';
import Head from 'next/head';
import { LayoutProps } from '../../interfaces';
import { PAGE_URL } from '../../config';
import Header from '../organisms/Header';

const Layout: FC<LayoutProps> = ({
  children,
  title = '',
  description = '',
  url,
  image = ``
}) => {
  return (
    <>
      <Head>
        <title>
          {title}
          {title && ' / '} GJ-A
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content={`${title}${title && ' / '} GJ-A`} />
        <meta name="robots" content="index, follow" />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${PAGE_URL}${url}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${PAGE_URL}${url}`} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />

        <link rel="icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      <main role="main">{children}</main>
    </>
  );
};

export default Layout;
