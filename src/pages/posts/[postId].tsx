import React from 'react';
import Container from '../../components/templates/Container';
import Layout from '../../components/templates/Layout';
import Post from '../../components/organisms/Post';
import { PostModel } from '../../interfaces/Post.model';

const SinglePost = ({ post }: { post: PostModel }) => {
  return (
    <Layout title={post.title || ''} url={`/posts/${post.id}`}>
      <section className="bg-gray-200 py-32">
        <Container>
          <Post post={post} />
        </Container>
      </section>
    </Layout>
  );
};

SinglePost.getInitialProps = async (ctx: any) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${ctx.query.postId}`
  );
  const post = await res.json();
  return { post };
};
export default SinglePost;
