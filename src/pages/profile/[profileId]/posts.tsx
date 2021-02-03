import React from 'react';
import ProfileHeader from '../../../components/organisms/ProfileHeader';
import UserPostsContent from '../../../components/organisms/UserPostsContent';
import Layout from '../../../components/templates/Layout';
import { UserModel } from '../../../interfaces/User.model';

const Posts = ({ user }: { user: UserModel }) => {
  return (
    <Layout title="Posts" url={`profile/${user.id}/posts`}>
      <ProfileHeader name={user.name} username={user.username} />
      <UserPostsContent name={user.name} username={user.username} />
    </Layout>
  );
};

Posts.getInitialProps = async (ctx: any) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${ctx.query.profileId}`
  );
  const json = await res.json();
  return { user: json };
};

export default Posts;
