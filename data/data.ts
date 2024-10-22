import { Chore, Household, HouseholdMember, User } from './types';

export const mockedUsers: User[] = [
  { uid: 'uUfRsM6E2BY7HllGInuSYklWHz03' },
  { uid: 'eOa5LC0XcZTJQOKQZmuuQ3AmR3L2' },
  { uid: 'MvsOPoLJTVOlKM241KGQG5pwDJB3' },
  { uid: 'hlgPocAGNkR3R16JdIRoNipdmlx2' },
];

export const mockedHouseholds: Household[] = [
  { id: '1', name: 'ResidentEvil', code: 'RE6666' },
  { id: '2', name: 'Greveholm', code: 'GH1234' },
];

export const mockedHouseholdMembers: HouseholdMember[] = [
  {
    id: '1',
    userId: 'uUfRsM6E2BY7HllGInuSYklWHz03',
    householdId: '1',
    avatar: '1.png',
    owner: true,
    name: 'Mamma',
    isActive: true,
    isRequest: false,
  },
  {
    id: '2',
    userId: 'eOa5LC0XcZTJQOKQZmuuQ3AmR3L2',
    householdId: '1',
    avatar: '2.png',
    owner: false,
    name: 'Mammas nya kille',
    isActive: true,
    isRequest: false,
  },
  {
    id: '3',
    userId: 'MvsOPoLJTVOlKM241KGQG5pwDJB3',
    householdId: '1',
    avatar: '3.png',
    owner: false,
    name: 'Junior',
    isActive: true,
    isRequest: false,
  },
  {
    id: '4',
    userId: 'hlgPocAGNkR3R16JdIRoNipdmlx2',
    householdId: '2',
    avatar: '2.png',
    owner: true,
    name: 'Pappa',
    isActive: true,
    isRequest: false,
  },
  {
    id: '5',
    userId: 'MvsOPoLJTVOlKM241KGQG5pwDJB3',
    householdId: '2',
    avatar: '1.png',
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
    householdId: '2',
  },
  {
    id: '4',
    title: 'Vattna Blommorna',
    description: 'Vattna alla blommorna i huset',
    interval: 4,
    energyWeight: 3,
    householdId: '2',
  },
];
