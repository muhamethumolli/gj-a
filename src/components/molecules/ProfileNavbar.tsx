import React from 'react';
import { useRouter } from 'next/router';

import CustomLink from '../atoms/CustomLink';

const ProfileNavbar = () => {
  const {
    query: { profileId }
  } = useRouter();

  return (
    <ul className="flex justify-around mt-14">
      <CustomLink href={`/profile/${profileId}`}>Profili</CustomLink>
      <CustomLink href={`/profile/${profileId}/posts`}>Postimet</CustomLink>
      <CustomLink href={`/profile/${profileId}/gallery`}>Galleria</CustomLink>
    </ul>
  );
};

export default ProfileNavbar;
