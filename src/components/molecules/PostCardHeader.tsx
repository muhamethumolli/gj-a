import React, { FC } from 'react';
import Link from 'next/link';
import { PostCardHeaderProps } from '../../interfaces';

const PostCardHeader: FC<PostCardHeaderProps> = ({ name, username, id }) => {
  return (
    <div className="flex justify-between items-center border-b pb-6 px-8">
      <div className="flex items-center">
        <div className="bg-gray-300 w-12 h-12 rounded-full"></div>
        <div className="flex flex-col pl-6">
          {id ? (
            <>
              <Link href={`/profile/${id}`}>
                <a className="cursor-pointer text-xl leading-4">{name}</a>
              </Link>
              <Link href={`/profile/${id}`}>
                <a className="text-lg leading-2 text-gray-400 mt-2">
                  @{username}
                </a>
              </Link>
            </>
          ) : (
            <>
              <h1 className="text-xl leading-4">{name}</h1>
              <p className="text-lg leading-2 text-gray-400 mt-2">
                @{username}
              </p>
            </>
          )}
        </div>
      </div>
      <span className="text-3xl">&#8942;</span>
    </div>
  );
};

export default PostCardHeader;
