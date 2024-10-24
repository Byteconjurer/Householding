import {
  AvatarType,
  Chore,
  ChoreCompleted,
  Household,
  HouseholdMember,
  User,
} from './types';

export const mockedUsers: User[] = [
  { uid: 'uUfRsM6E2BY7HllGInuSYklWHz03' },
  { uid: 'eOa5LC0XcZTJQOKQZmuuQ3AmR3L2' },
  { uid: 'MvsOPoLJTVOlKM241KGQG5pwDJB3' },
  { uid: 'hlgPocAGNkR3R16JdIRoNipdmlx2' },
];

export const mockedHouseholds: Household[] = [
  { id: '1', name: 'ResidentEvil', code: 'RE6666' },
  { id: '2', name: 'Greveholm', code: 'GH1234' },
  { id: '3', name: 'Kaoscentralen', code: 'HW7777' },
  { id: '4', name: 'Stjärnhuset', code: 'HP0001' },
];

export const mockedHouseholdMembers: HouseholdMember[] = [
  {
    id: '1',
    userId: 'uUfRsM6E2BY7HllGInuSYklWHz03',
    householdId: '1',
    avatar: 'chicken',
    owner: true,
    name: 'Mamma',
    isActive: true,
    isRequest: false,
  },
  {
    id: '2',
    userId: 'eOa5LC0XcZTJQOKQZmuuQ3AmR3L2',
    householdId: '1',
    avatar: 'dolphin',
    owner: false,
    name: 'Mammas nya kille',
    isActive: true,
    isRequest: false,
  },
  {
    id: '3',
    userId: 'MvsOPoLJTVOlKM241KGQG5pwDJB3',
    householdId: '1',
    avatar: 'fox',
    owner: false,
    name: 'Junior',
    isActive: true,
    isRequest: false,
  },
  {
    id: '4',
    userId: 'hlgPocAGNkR3R16JdIRoNipdmlx2',
    householdId: '2',
    avatar: 'frog',
    owner: true,
    name: 'Pappa',
    isActive: true,
    isRequest: false,
  },
  {
    id: '5',
    userId: 'MvsOPoLJTVOlKM241KGQG5pwDJB3',
    householdId: '2',
    avatar: 'owl',
    owner: false,
    name: 'Junior',
    isActive: true,
    isRequest: true,
  },
];

export const mockedChores: Chore[] = [
  {
    id: '1',
    title: 'Klappe kattn',
    description: 'Glöm int å klappe kattn',
    interval: 2,
    energyWeight: 3,
    householdId: '1',
  },
  {
    id: '2',
    title: 'Vacuuming',
    description: 'Vacuum everything and everyone',
    interval: 3,
    energyWeight: 4,
    householdId: '1',
  },
  {
    id: '3',
    title: 'Pilla naveln',
    description: 'Pilla i naveln på alla i hushållet',
    interval: 7,
    energyWeight: 2,
    householdId: '1',
  },
  {
    id: '4',
    title: 'Vattna Blommorna',
    description: 'Vattna alla blommorna i huset',
    interval: 4,
    energyWeight: 3,
    householdId: '2',
  },
  {
    id: '5',
    title: 'Städa köket',
    description: 'Torka av bänkarna och diska',
    interval: 4,
    energyWeight: 3,
    householdId: '2',
  },
  {
    id: '6',
    title: 'Tvätta kläder',
    description: 'Samla smutskläder och kör en tvätt',
    interval: 3,
    energyWeight: 1,
    householdId: '2',
  },
  {
    id: '7',
    title: 'Laga mat',
    description: 'Laga mat till hela familjen',
    interval: 1,
    energyWeight: 2,
    householdId: '2',
  },
  {
    id: '8',
    title: 'Ta ut soporna',
    description: 'Töm sopkorgarna och ta ut soporna till återvinning',
    interval: 2,
    energyWeight: 3,
    householdId: '2',
  },
];

export const mockedChoresCompleted: ChoreCompleted[] = [
  {
    id: '1',
    choreId: '1',
    householdMemberId: '1',
    choreComplete: '2024-10-22T00:00:00.000Z',
  },
  {
    id: '2',
    choreId: '2',
    householdMemberId: '1',
    choreComplete: '2024-10-22T00:00:00.000Z',
  },
  {
    id: '3',
    choreId: '3',
    householdMemberId: '2',
    choreComplete: '2024-10-22T00:00:00.000Z',
  },
  {
    id: '4',
    choreId: '4',
    householdMemberId: '2',
    choreComplete: '2024-10-22T00:00:00.000Z',
  },
  {
    id: '5',
    choreId: '5',
    householdMemberId: '3',
    choreComplete: '2024-10-23T00:00:00.000Z',
  },
  {
    id: '6',
    choreId: '6',
    householdMemberId: '3',
    choreComplete: '2024-10-23T00:00:00.000Z',
  },
];

export const avatarsMap: { [key: string]: AvatarType } = {
  chicken: { icon: require('../assets/avatarImages/1.png'), color: '#fff58e' },
  dolphin: { icon: require('../assets/avatarImages/2.png'), color: '#70fffc' },
  fox: { icon: require('../assets/avatarImages/3.png'), color: '#ffb260' },
  frog: { icon: require('../assets/avatarImages/4.png'), color: '#71fc78' },
  squid: { icon: require('../assets/avatarImages/5.png'), color: '#ff728e' },
  owl: { icon: require('../assets/avatarImages/6.png'), color: '#937f48' },
  pig: { icon: require('../assets/avatarImages/7.png'), color: '#e2a69a' },
  unicorn: { icon: require('../assets/avatarImages/8.png'), color: '#f280ea' },
};
