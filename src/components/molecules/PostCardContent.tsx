import React, { FC } from 'react';
import Link from 'next/link';
import { PostCardContentProps } from '../../interfaces';

const PostCardContent: FC<PostCardContentProps> = ({ post }) => {
  return (
    <div className="py-6 px-8">
      <Link href={`/posts/${post.id}`}>
        <a className="pb-4 text-black text-xl">{post.title}</a>
      </Link>
      <p className="text-lg text-gray-500">{post.body}</p>
    </div>
  );
};

export default PostCardContent;
