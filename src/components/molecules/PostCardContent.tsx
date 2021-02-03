import React, { FC } from 'react';
import { PostCardContentProps } from '../../interfaces';

const PostCardContent: FC<PostCardContentProps> = ({ post }) => {
  return (
    <div className="py-6 px-8">
      <h1 className="pb-4 text-black text-xl">{post.title}</h1>
      <p className="text-lg text-gray-500">{post.body}</p>
    </div>
  );
};

export default PostCardContent;
