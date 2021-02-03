import React, { useState } from 'react';
import Post from '../components/organisms/Post';
import Container from '../components/templates/Container';
import Layout from '../components/templates/Layout';
import { PostModel } from '../interfaces/Post.model';

const Home = ({ posts }: { posts: PostModel[] }) => {
  const [show, setShow] = useState<number>(10);

  const showMore = () => setShow(show + 10);
  return (
    <Layout title="Home" url="/">
      <section className="bg-gray-200 py-32">
        <Container>
          {posts.map(
            (el, key) =>
              key + 1 <= show && (
                <Post post={el} key={`${el.id}-${el.userId}`} />
              )
          )}
          <div className="flex justify-center">
            {show <= posts.length && (
              <button
                onClick={showMore}
                className="py-6 px-28 bg-gray-300 rounded-md text-gray-600 font-medium leading-7 focus:outline-none"
              >
                Shiko me shumë postime
              </button>
            )}
          </div>
        </Container>
      </section>
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  return { posts };
};

export default Home;
