import { useRouter } from 'next/router';
import React from 'react';

const Country = () => {
  const { query } = useRouter();
  console.log(query);
  return <div>Country</div>;
};

export default Country;
