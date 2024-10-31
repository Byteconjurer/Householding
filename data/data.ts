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
    owner: true,
    name: 'Sheman',
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
    isActive: false,
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
    avatar: 'chicken',
    owner: false,
    name: 'Junior',
    isActive: true,
    isRequest: false,
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
    householdId: '1',
  },
  {
    id: '5',
    title: 'Städa köket',
    description: 'Torka av bänkarna och diska',
    interval: 4,
    energyWeight: 3,
    householdId: '1',
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
  // Current week
  {
    id: '1',
    choreId: '1',
    householdMemberId: '2',
    choreComplete: '2024-10-28',
    householdId: '1',
  },
  {
    id: '2',
    choreId: '1',
    householdMemberId: '3',
    choreComplete: '2024-10-24',
    householdId: '1',
  },
  {
    id: '3',
    choreId: '2',
    householdMemberId: '1',
    choreComplete: '2024-10-25',
    householdId: '1',
  },
  {
    id: '4',
    choreId: '3',
    householdMemberId: '2',
    choreComplete: '2024-10-30',
    householdId: '1',
  },
  {
    id: '5',
    choreId: '5',
    householdMemberId: '1',
    choreComplete: '2024-10-30',
    householdId: '2',
  },
  {
    id: '6',
    choreId: '6',
    householdMemberId: '4',
    choreComplete: '2024-10-25',
    householdId: '2',
  },
  {
    id: '7',
    choreId: '7',
    householdMemberId: '4',
    choreComplete: '2024-10-25',
    householdId: '2',
  },
  {
    id: '8',
    choreId: '7',
    householdMemberId: '4',
    choreComplete: '2024-10-25',
    householdId: '2',
  },
  // {
  //   id: '9',
  //   choreId: '8',
  //   householdMemberId: '5',
  //   choreComplete: '2024-10-23',
  //   householdId: '2',
  // },
  // {
  //   id: '10',
  //   choreId: '8',
  //   householdMemberId: '4',
  //   choreComplete: '2024-10-28',
  //   householdId: '2',
  // },
  // {
  //   id: '11',
  //   choreId: '6',
  //   householdMemberId: '3',
  //   choreComplete: '2024-10-28',
  //   householdId: '2',
  // },
  // {
  //   id: '12',
  //   choreId: '7',
  //   householdMemberId: '3',
  //   choreComplete: '2024-10-28',
  //   householdId: '2',
  // },
  // {
  //   id: '13',
  //   choreId: '7',
  //   householdMemberId: '4',
  //   choreComplete: '2024-10-28',
  //   householdId: '2',
  // },
  // {
  //   id: '14',
  //   choreId: '6',
  //   householdMemberId: '4',
  //   choreComplete: '2024-10-28',
  //   householdId: '2',
  // },
  // {
  //   id: '15',
  //   choreId: '6',
  //   householdMemberId: '5',
  //   choreComplete: '2024-10-28',
  //   householdId: '2',
  // },
  // {
  //   id: '16',
  //   choreId: '8',
  //   householdMemberId: '5',
  //   choreComplete: '2024-10-28',
  //   householdId: '2',
  // },
  // {
  //   id: '17',
  //   choreId: '6',
  //   householdMemberId: '5',
  //   choreComplete: '2024-10-28',
  //   householdId: '2',
  // },
  // {
  //   id: '18',
  //   choreId: '7',
  //   householdMemberId: '5',
  //   choreComplete: '2024-10-28',
  //   householdId: '2',
  // },
  // {
  //   id: '20',
  //   choreId: '6',
  //   householdMemberId: '5',
  //   choreComplete: '2024-10-28',
  //   householdId: '2',
  // },

  // // Last week (matching current week entries)
  // {
  //   id: '21',
  //   choreId: '1',
  //   householdMemberId: '1',
  //   choreComplete: '2024-10-26',
  //   householdId: '2',
  // },
  // {
  //   id: '22',
  //   choreId: '1',
  //   householdMemberId: '1',
  //   choreComplete: '2024-10-26',
  //   householdId: '2',
  // },
  // {
  //   id: '23',
  //   choreId: '1',
  //   householdMemberId: '1',
  //   choreComplete: '2024-10-26',
  //   householdId: '2',
  // },
  // {
  //   id: '24',
  //   choreId: '2',
  //   householdMemberId: '1',
  //   choreComplete: '2024-10-26',
  //   householdId: '2',
  // },
  // {
  //   id: '25',
  //   choreId: '3',
  //   householdMemberId: '1',
  //   choreComplete: '2024-10-26',
  //   householdId: '2',
  // },
  // {
  //   id: '26',
  //   choreId: '4',
  //   householdMemberId: '2',
  //   choreComplete: '2024-10-26',
  //   householdId: '2',
  // },
  // {
  //   id: '27',
  //   choreId: '4',
  //   householdMemberId: '2',
  //   choreComplete: '2024-10-26',
  //   householdId: '2',
  // },
  // {
  //   id: '28',
  //   choreId: '2',
  //   householdMemberId: '2',
  //   choreComplete: '2024-10-26',
  //   householdId: '2',
  // },
  // {
  //   id: '29',
  //   choreId: '3',
  //   householdMemberId: '4',
  //   choreComplete: '2024-10-26',
  //   householdId: '2',
  // },
  // {
  //   id: '30',
  //   choreId: '4',
  //   householdMemberId: '4',
  //   choreComplete: '2024-10-26',
  //   householdId: '2',
  // },
  // {
  //   id: '31',
  //   choreId: '1',
  //   householdMemberId: '4',
  //   choreComplete: '2024-10-26',
  //   householdId: '2',
  // },
  // {
  //   id: '32',
  //   choreId: '2',
  //   householdMemberId: '4',
  //   choreComplete: '2024-10-26',
  //   householdId: '2',
  // },
  // {
  //   id: '33',
  //   choreId: '3',
  //   householdMemberId: '4',
  //   choreComplete: '2024-10-26',
  //   householdId: '2',
  // },
  // {
  //   id: '34',
  //   choreId: '4',
  //   householdMemberId: '4',
  //   choreComplete: '2024-10-26',
  //   householdId: '2',
  // },
  // {
  //   id: '35',
  //   choreId: '1',
  //   householdMemberId: '5',
  //   choreComplete: '2024-10-26',
  //   householdId: '2',
  // },
  // {
  //   id: '36',
  //   choreId: '2',
  //   householdMemberId: '5',
  //   choreComplete: '2024-10-26',
  //   householdId: '2',
  // },
  // {
  //   id: '37',
  //   choreId: '3',
  //   householdMemberId: '5',
  //   choreComplete: '2024-10-26',
  //   householdId: '2',
  // },
  // {
  //   id: '38',
  //   choreId: '4',
  //   householdMemberId: '5',
  //   choreComplete: '2024-10-26',
  //   householdId: '2',
  // },
  // {
  //   id: '39',
  //   choreId: '5',
  //   householdMemberId: '5',
  //   choreComplete: '2024-10-26',
  //   householdId: '2',
  // },
  // {
  //   id: '40',
  //   choreId: '1',
  //   householdMemberId: '4',
  //   choreComplete: '2024-10-26',
  //   householdId: '2',
  // },

  // // Last month (roughly four times the rows of the weeks)
  // {
  //   id: '41',
  //   choreId: '1',
  //   householdMemberId: '1',
  //   choreComplete: '2024-09-10',
  //   householdId: '2',
  // },
  // {
  //   id: '42',
  //   choreId: '1',
  //   householdMemberId: '1',
  //   choreComplete: '2024-09-11',
  //   householdId: '2',
  // },
  // {
  //   id: '43',
  //   choreId: '1',
  //   householdMemberId: '1',
  //   choreComplete: '2024-09-12',
  //   householdId: '2',
  // },
  // {
  //   id: '44',
  //   choreId: '2',
  //   householdMemberId: '1',
  //   choreComplete: '2024-09-13',
  //   householdId: '2',
  // },
  // {
  //   id: '45',
  //   choreId: '2',
  //   householdMemberId: '1',
  //   choreComplete: '2024-09-15',
  //   householdId: '2',
  // },
  // {
  //   id: '46',
  //   choreId: '3',
  //   householdMemberId: '2',
  //   choreComplete: '2024-09-14',
  //   householdId: '2',
  // },
  // {
  //   id: '47',
  //   choreId: '3',
  //   householdMemberId: '2',
  //   choreComplete: '2024-09-20',
  //   householdId: '2',
  // },
  // {
  //   id: '48',
  //   choreId: '4',
  //   householdMemberId: '2',
  //   choreComplete: '2024-09-25',
  //   householdId: '2',
  // },
  // {
  //   id: '49',
  //   choreId: '5',
  //   householdMemberId: '2',
  //   choreComplete: '2024-09-30',
  //   householdId: '2',
  // },
  // {
  //   id: '50',
  //   choreId: '1',
  //   householdMemberId: '3',
  //   choreComplete: '2024-09-15',
  //   householdId: '2',
  // },
  // {
  //   id: '51',
  //   choreId: '1',
  //   householdMemberId: '3',
  //   choreComplete: '2024-09-20',
  //   householdId: '2',
  // },
  // {
  //   id: '52',
  //   choreId: '2',
  //   householdMemberId: '3',
  //   choreComplete: '2024-09-25',
  //   householdId: '2',
  // },
  // {
  //   id: '53',
  //   choreId: '3',
  //   householdMemberId: '3',
  //   choreComplete: '2024-09-22',
  //   householdId: '2',
  // },
  // {
  //   id: '54',
  //   choreId: '4',
  //   householdMemberId: '4',
  //   choreComplete: '2024-09-18',
  //   householdId: '2',
  // },
  // {
  //   id: '55',
  //   choreId: '5',
  //   householdMemberId: '4',
  //   choreComplete: '2024-09-28',
  //   householdId: '2',
  // },
  // {
  //   id: '56',
  //   choreId: '1',
  //   householdMemberId: '5',
  //   choreComplete: '2024-09-29',
  //   householdId: '2',
  // },
  // {
  //   id: '57',
  //   choreId: '2',
  //   householdMemberId: '5',
  //   choreComplete: '2024-09-24',
  //   householdId: '2',
  // },
  // {
  //   id: '58',
  //   choreId: '3',
  //   householdMemberId: '5',
  //   choreComplete: '2024-09-22',
  //   householdId: '2',
  // },
  // {
  //   id: '59',
  //   choreId: '4',
  //   householdMemberId: '5',
  //   choreComplete: '2024-09-21',
  //   householdId: '2',
  // },
  // {
  //   id: '60',
  //   choreId: '5',
  //   householdMemberId: '5',
  //   choreComplete: '2024-10-23T00:00:00.000Z',
  //   householdId: '2',
  // },
  // {
  //   id: '66',
  //   choreId: '6',
  //   householdMemberId: '5',
  //   choreComplete: '2024-10-23T00:00:00.000Z',
  //   householdId: '2',
  // },
  // {
  //   id: '12',
  //   choreId: '6',
  //   householdMemberId: '5',
  //   choreComplete: '2024-10-23T00:00:00.000Z',
  //   householdId: '2',
  // },
  // {
  //   id: '73',
  //   choreId: '5',
  //   householdMemberId: '6',
  //   choreComplete: '2024-09-37',
  //   householdId: '2',
  // },
  // {
  //   id: '74',
  //   choreId: '6',
  //   householdMemberId: '5',
  //   choreComplete: '2024-10-23T00:00:00.000Z',
  //   householdId: '2',
  // },
  // {
  //   id: '75',
  //   choreId: '7',
  //   householdMemberId: '5',
  //   choreComplete: '2024-10-23T00:00:00.000Z',
  //   householdId: '2',
  // },
  // {
  //   id: '87',
  //   choreId: '7',
  //   householdMemberId: '5',
  //   choreComplete: '2024-10-23T00:00:00.000Z',
  //   householdId: '2',
  // },
  // {
  //   id: '97',
  //   choreId: '6',
  //   householdMemberId: '7',
  //   choreComplete: '2024-09-61',
  //   householdId: '2',
  // },
  // {
  //   id: '98',
  //   choreId: '7',
  //   householdMemberId: '5',
  //   choreComplete: '2024-10-23T00:00:00.000Z',
  //   householdId: '2',
  // },
];

export const avatarsMap: { [key: string]: AvatarType } = {
  chicken: {
    icon: require('../assets/avatarImages/1.png'),
    color: '#fff58e',
  },
  dolphin: {
    icon: require('../assets/avatarImages/2.png'),
    color: '#70fffc',
  },
  fox: {
    icon: require('../assets/avatarImages/3.png'),
    color: '#ffb260',
  },
  frog: {
    icon: require('../assets/avatarImages/4.png'),
    color: '#71fc78',
  },
  squid: {
    icon: require('../assets/avatarImages/5.png'),
    color: '#ff728e',
  },
  owl: {
    icon: require('../assets/avatarImages/6.png'),
    color: '#937f48',
  },
  pig: {
    icon: require('../assets/avatarImages/7.png'),
    color: '#e2a69a',
  },
  unicorn: {
    icon: require('../assets/avatarImages/8.png'),
    color: '#f280ea',
  },
};
