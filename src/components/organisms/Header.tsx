import React from 'react';
import Container from '../templates/Container';

const Header = () => {
  return (
    <header className="bg-white shadow-bottom py-6">
      <Container className="flex justify-center">
        <h1 className="text-yellow-600 leading-10 text-3xl font-bold">Front-End Assignment</h1>
      </Container>
    </header>
  );
};

export default Header;
