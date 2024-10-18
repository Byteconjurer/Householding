import { ImageSourcePropType } from 'react-native';
import { AvatarImageKeys } from '../data/types';

export const avatarImages: { [key in AvatarImageKeys]: ImageSourcePropType } = {
  '1.png': require('../assets/avatarImages/1.png'),
  '2.png': require('../assets/avatarImages/2.png'),
  '3.png': require('../assets/avatarImages/3.png'),
  '4.png': require('../assets/avatarImages/4.png'),
  '5.png': require('../assets/avatarImages/5.png'),
  '6.png': require('../assets/avatarImages/6.png'),
  '7.png': require('../assets/avatarImages/7.png'),
  '8.png': require('../assets/avatarImages/8.png'),
};
