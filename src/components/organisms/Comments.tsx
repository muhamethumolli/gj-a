import React, { FC, useCallback, useEffect, useState } from 'react';
import cx from 'classnames';
import { CommentsProps } from '../../interfaces';
import Input from '../atoms/Input';
import CommentsContent from '../molecules/CommentsContent';
import { CommentModel } from '../../interfaces/Comment.model';

const Comments: FC<CommentsProps> = ({ id, withInput = true }) => {
  const [showComments, setShowComments] = useState<boolean>(withInput);
  const [comments, setComments] = useState<CommentModel[]>([]);

  const fetchUser = useCallback(async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    const json = await res.json();
    return json;
  }, [id]);

  useEffect(() => {
    fetchUser()
      .then((json) => setComments(json))
      .catch((e) => console.log(e));
  }, [fetchUser]);

  const _showComments = () => setShowComments(true);

  return (
    <div className="px-8">
      {withInput && <Input />}
      <div
        className={cx('flex justify-center border-gray-300 pt-4', {
          'border-b pb-4': showComments,
          'border-t ': !showComments
        })}
      >
        <button
          onClick={!withInput ? _showComments : undefined}
          className="text-gray-400 font-bold focus:outline-none"
        >
          {comments.length} komente
        </button>
      </div>
      {showComments && <CommentsContent comments={comments} />}
    </div>
  );
};

export default Comments;
