import React from 'react';
import Link from 'next/link';
import Container from '../templates/Container';

const Header = () => {
  return (
    <header className="bg-white shadow-bottom py-6">
      <Container className="flex justify-center">
        <Link href="/">
          <a className="text-yellow-600 leading-10 text-3xl font-bold">
            Front-End Assignment
          </a>
        </Link>
      </Container>
    </header>
  );
};

export default Header;
