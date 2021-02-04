import React, { FC } from 'react';

import PostCardContent from '../molecules/PostCardContent';
import PostCardHeader from '../molecules/PostCardHeader';
import { PostCardProps } from '../../interfaces';
import Comments from './Comments';

const PostCard: FC<PostCardProps> = ({ user, post, withInput = true }) => {
  return (
    <div className="bg-white rounded-md py-6">
      <PostCardHeader {...user} />
      <PostCardContent post={post} />
      <Comments id={post.id} withInput={withInput}/>
    </div>
  );
};

export default PostCard;
