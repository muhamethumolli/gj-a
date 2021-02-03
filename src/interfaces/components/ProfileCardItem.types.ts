import { CardItemTypes } from '../../enums/ProfileCardItem.enum';

export interface ProfileCardItemProps {
  type?: CardItemTypes;
  text: string;
}
