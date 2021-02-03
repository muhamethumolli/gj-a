import React from 'react';

import ProfileHeader from '../../../components/organisms/ProfileHeader';
import ProfileContent from '../../../components/organisms/ProfileContent';
import Layout from '../../../components/templates/Layout';
import { UserModel } from '../../../interfaces/User.model';

const Profile = ({ user }: { user: UserModel }) => {
  return (
    <Layout title="Profile" url={`/profile/${user.id}`}>
      <ProfileHeader name={user?.name} username={user?.username} />
      <ProfileContent {...user} />
    </Layout>
  );
};

Profile.getInitialProps = async (ctx: any) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${ctx.query.profileId}`
  );
  const json = await res.json();
  return { user: json };
};

export default Profile;
