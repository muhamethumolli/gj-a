import React, {
  FC
  //  useCallback, useEffect, useState
} from 'react';
// import { useRouter } from 'next/router';

import Container from '../../components/templates/Container';
import { UserPostsContentProps } from '../../interfaces';
import PostCardHeader from '../molecules/PostCardHeader';

const UserPostsContent: FC<UserPostsContentProps> = ({ name, username }) => {
  // const [posts, setPosts] = useState([]);
  // const {
  //   query: { profileId }
  // } = useRouter();

  // const fetchPosts = useCallback(async () => {
  //   const res = await fetch(
  //     `https://jsonplaceholder.typicode.com/users/${profileId}/posts`
  //   );
  //   const json = await res.json();
  //   return json;
  // }, [profileId]);

  // useEffect(() => {
  //   fetchPosts()
  //     .then((json) => setPosts(json))
  //     .catch((e) => console.log(e));
  // }, [fetchPosts]);

  return (
    <section className="mt-20">
      <Container>
        <div className="bg-white rounded-md py-6">
          <PostCardHeader name={name} username={username} />
        </div>
      </Container>
    </section>
  );
};

export default UserPostsContent;
