import { PostModel } from '../Post.model';
import { ProfileUserProps } from './ProfileUser.types';

export interface PostCardProps {
  post: PostModel;
  user: ProfileUserProps;
}
