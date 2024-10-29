import React from 'react';
import Svg from 'react-native-svg';
// @ts-ignore
import ChickenSvg from '../assets/avatarImages/svg/Chicken';
import DolphinSvg from '../assets/avatarImages/svg/Dolphin';
import FoxSvg from '../assets/avatarImages/svg/Fox';
import FrogSvg from '../assets/avatarImages/svg/Frog';
import OwlSvg from '../assets/avatarImages/svg/Owl';
import PigSvg from '../assets/avatarImages/svg/Pig';
import SquidSvg from '../assets/avatarImages/svg/Squid';
import UnicornSvg from '../assets/avatarImages/svg/Unicorn';

export default function SvgComponent({ avatar }: { avatar: string }) {
  return (
    <Svg height="70%" width="70%" viewBox="0 0 100 100">
      {avatar === 'chicken' && <ChickenSvg />}
      {avatar === 'dolphin' && <DolphinSvg />}
      {avatar === 'fox' && <FoxSvg />}
      {avatar === 'frog' && <FrogSvg />}
      {avatar === 'owl' && <OwlSvg />}
      {avatar === 'pig' && <PigSvg />}
      {avatar === 'squid' && <SquidSvg />}
      {avatar === 'unicorn' && <UnicornSvg />}
    </Svg>
  );
}
