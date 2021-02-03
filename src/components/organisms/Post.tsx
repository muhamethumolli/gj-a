import React, { FC, useCallback, useEffect, useState } from 'react';
import { PostProps, ProfileHeaderProps } from '../../interfaces';
import PostCard from './PostCard';

const Post: FC<PostProps> = ({ post }) => {
  const [user, setUser] = useState<ProfileHeaderProps>({
    name: '',
    username: ''
  });

  const fetchUser = useCallback(async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${post.userId}`
    );
    const json = await res.json();
    return json;
  }, [post.userId]);

  useEffect(() => {
    fetchUser()
      .then((json) => setUser(json))
      .catch((e) => console.log(e));
  }, [fetchUser]);

  return (
    <div className="pb-12">
      <PostCard
        user={{ name: user?.name, username: user?.username, id: user.id }}
        post={post}
      />
    </div>
  );
};

export default Post;
