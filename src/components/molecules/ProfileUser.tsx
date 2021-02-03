import React, { FC } from 'react';
import { ProfileUserProps } from '../../interfaces';

const ProfileUser: FC<ProfileUserProps> = ({ name, username }) => {
  return (
    <div className="pt-8 flex justify-center items-center">
      <div className="bg-white w-32 h-32 rounded-full"></div>
      <div className="flex flex-col pl-6">
        <h1 className="text-2xl leading-6">{name}</h1>
        <p className="text-xl leading-4 text-gray-400 pt-3">@{username}</p>
      </div>
    </div>
  );
};

export default ProfileUser;
