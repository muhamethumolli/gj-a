import React, { FC } from 'react';

import PostCardContent from '../molecules/PostCardContent';
import PostCardHeader from '../molecules/PostCardHeader';
import { PostCardProps } from '../../interfaces';

const PostCard: FC<PostCardProps> = ({ user, post }) => {
  return (
    <div className="bg-white rounded-md py-6">
      <PostCardHeader {...user} />
      <PostCardContent post={post} />
    </div>
  );
};

export default PostCard;
