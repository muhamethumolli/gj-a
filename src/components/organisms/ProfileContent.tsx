import React, { FC } from 'react';

import Container from '../../components/templates/Container';
import { CardItemTypes } from '../../enums/ProfileCardItem.enum';
import { ProfileContentProps } from '../../interfaces/components/ProfileContent.types';
import ProfileCardItem from '../atoms/ProfileCardItem';

const ProfileContent: FC<ProfileContentProps> = ({
  email,
  address,
  phone,
  website,
  company
}) => {
  return (
    <section className="bg-gray-200 py-20">
      <Container>
        <div className="bg-white rounded-md shadow-2xl flex justify-center py-6">
          <div className="grid gap-y-10">
            <div className="grid grid-cols-2">
              <ProfileCardItem text="Email:" />
              <ProfileCardItem type={CardItemTypes.SECOND} text={email} />
            </div>
            <div className="grid grid-cols-2">
              <ProfileCardItem text="Address:" />
              <div className="grid grid-cols-2">
                <div>
                  <ProfileCardItem text="Street:" />
                  <ProfileCardItem text="Suite:" />
                  <ProfileCardItem text="City:" />
                  <ProfileCardItem text="Zipcode:" />
                </div>
                <div>
                  <ProfileCardItem
                    type={CardItemTypes.SECOND}
                    text={address?.street}
                  />
                  <ProfileCardItem
                    type={CardItemTypes.SECOND}
                    text={address?.suite}
                  />
                  <ProfileCardItem
                    type={CardItemTypes.SECOND}
                    text={address?.city}
                  />
                  <ProfileCardItem
                    type={CardItemTypes.SECOND}
                    text={address?.zipcode}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <ProfileCardItem text="Phone:" />
              <ProfileCardItem type={CardItemTypes.SECOND} text={phone} />
            </div>
            <div className="grid grid-cols-2">
              <ProfileCardItem text="Website:" />
              <ProfileCardItem type={CardItemTypes.SECOND} text={website} />
            </div>
            <div className="grid grid-cols-2">
              <ProfileCardItem text="Company:" />
              <div className="grid grid-cols-2">
                <ProfileCardItem text="Name:" />
                <ProfileCardItem
                  type={CardItemTypes.SECOND}
                  text={company?.name}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProfileContent;
