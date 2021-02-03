import React, { FC, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Container from '../../components/templates/Container';
import { UserPostsContentProps } from '../../interfaces';
import PostCard from './PostCard';
import { PostModel } from '../../interfaces/Post.model';

const UserPostsContent: FC<UserPostsContentProps> = ({ name, username }) => {
  const [show, setShow] = useState<number>(0);
  const [posts, setPosts] = useState<Array<PostModel>>([]);
  const {
    query: { profileId }
  } = useRouter();

  const fetchPosts = useCallback(async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${profileId}/posts`
    );
    const json = await res.json();
    return json;
  }, [profileId]);

  useEffect(() => {
    fetchPosts()
      .then((json) => setPosts(json))
      .catch((e) => console.log(e));
  }, [fetchPosts]);

  const showMore = () => setShow(show + 1);

  return (
    <section className="py-20">
      <Container>
        {posts.map((el,key) => key <= show && (
          <div className="pb-12" key={`${el.id}-${el.userId}`}>
            <PostCard user={{ name, username }} post={el} />
          </div>
        ))}
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
  );
};

export default UserPostsContent;
