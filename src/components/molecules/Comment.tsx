import React, { FC } from 'react';
import { CommentProps } from '../../interfaces';

const Comment: FC<CommentProps> = ({ comment }) => {
  return (
    <div className="ml-8 py-4 border-b border-gray-300">
      <div className="flex justify-between ">
        <h1 className="text-lg">{comment.email}</h1>
        <span className="text-3xl text-gray-400">&#8942;</span>
      </div>
      <p className="text-gray-500">{comment.body}</p>
    </div>
  );
};

export default Comment;
