import React, { FC, useState } from 'react';
import { CommentsContentProps } from '../../interfaces';
import Comment from './Comment';

const CommentsContent: FC<CommentsContentProps> = ({ comments }) => {
  const [show, setShow] = useState<number>(1);

  const showMore = () => setShow(show + 2);
  return (
    <div className="">
      {comments.map(
        (c, key) =>
          key <= show && <Comment comment={c} key={`${c.id}-${c.postId}`} />
      )}
      <div className="flex justify-center pt-2">
        {show < comments.length && (
          <button
            onClick={showMore}
            className="text-yellow-600 text-sm font-bold focus:outline-none"
          >
            Shiko më shumë komente
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentsContent;
