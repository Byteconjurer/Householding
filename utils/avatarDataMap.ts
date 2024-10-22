import { avatarColors } from '../data/avatarColors';
import { AvatarData, AvatarImageKeys } from '../data/types';

export const avatarData: { [key in AvatarImageKeys]: AvatarData } = {
  '1.png': {
    image: require('../assets/avatarImages/1.png'),
    color: avatarColors['1.png'],
  },
  '2.png': {
    image: require('../assets/avatarImages/2.png'),
    color: avatarColors['2.png'],
  },
  '3.png': {
    image: require('../assets/avatarImages/3.png'),
    color: avatarColors['3.png'],
  },
  '4.png': {
    image: require('../assets/avatarImages/4.png'),
    color: avatarColors['4.png'],
  },
  '5.png': {
    image: require('../assets/avatarImages/5.png'),
    color: avatarColors['5.png'],
  },
  '6.png': {
    image: require('../assets/avatarImages/6.png'),
    color: avatarColors['6.png'],
  },
  '7.png': {
    image: require('../assets/avatarImages/7.png'),
    color: avatarColors['7.png'],
  },
  '8.png': {
    image: require('../assets/avatarImages/8.png'),
    color: avatarColors['8.png'],
  },
};
