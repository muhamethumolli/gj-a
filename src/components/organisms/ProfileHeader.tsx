import React, { FC } from 'react';

import Container from '../../components/templates/Container';
import ProfileNavbar from '../molecules/ProfileNavbar';
import ProfileUser from '../molecules/ProfileUser';
import { ProfileHeaderProps } from '../../interfaces';

const ProfileHeader: FC<ProfileHeaderProps> = ({ ...props }) => {
  return (
    <section className="bg-gray-300">
      <Container>
        <ProfileUser {...props} />
        <ProfileNavbar />
      </Container>
    </section>
  );
};

export default ProfileHeader;
