import React from 'react';
import ProfileHeader from '../../../components/organisms/ProfileHeader';
import Container from '../../../components/templates/Container';
import Layout from '../../../components/templates/Layout';

const Posts = () => {
  return (
    <Layout title="Posts" url="/Posts">
          <ProfileHeader />
      <section className="bg-gray-200">
        <Container>
          <div>Posts</div>
        </Container>
      </section>
    </Layout>
  );
};

export default Posts;
