import { avatarColors } from '../data/avatarColors';
import { AvatarType } from '../data/types';

export const avatarsMap: { [key: string]: AvatarType } = {
  chicken: {
    image: require('../assets/avatarImages/1.png'),
    color: avatarColors['chicken'],
  },
  dolphin: {
    image: require('../assets/avatarImages/2.png'),
    color: avatarColors['dolphin'],
  },
  fox: {
    image: require('../assets/avatarImages/3.png'),
    color: avatarColors['fox'],
  },
  frog: {
    image: require('../assets/avatarImages/4.png'),
    color: avatarColors['frog'],
  },
  octopus: {
    image: require('../assets/avatarImages/5.png'),
    color: avatarColors['octopus'],
  },
  owl: {
    image: require('../assets/avatarImages/6.png'),
    color: avatarColors['owl'],
  },
  pig: {
    image: require('../assets/avatarImages/7.png'),
    color: avatarColors['pig'],
  },
  unicorn: {
    image: require('../assets/avatarImages/8.png'),
    color: avatarColors['unicorn'],
  },
};
