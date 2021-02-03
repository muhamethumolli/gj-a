import React, { FC } from 'react';

import { ProfileCardItemProps } from '../../interfaces';
import { CardItemTypes } from '../../enums/ProfileCardItem.enum';

const ProfileCardItem: FC<ProfileCardItemProps> = ({
  type = CardItemTypes.DEFAULT,
  text
}) => {
  return <p className={type}>{text}</p>;
};

export default ProfileCardItem;
