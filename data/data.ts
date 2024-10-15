import { User, HouseholdMember, Household, Chore } from './types';

export const mockedUsers: User[] = [
  { id: 1, name: 'ÄgareJöns', password: 'JagÄgerAllt' },
  { id: 2, name: 'HushållsEnjoyer', password: 'JagBorHär!' },
  { id: 3, name: 'BostadsBertil', password: 'Potatis' },
  { id: 4, name: 'Sauron', password: 'ISeeYou' },
  { id: 5, name: 'NullPointer', password: 'undefined_error' },
  { id: 6, name: 'LadyIrony', password: 'irony_master' },
  { id: 7, name: 'CaptainObvious', password: 'duh12345' },
  { id: 8, name: 'TheChosenOne', password: 'matrix_reloaded' },
  { id: 9, name: '404NotFound', password: 'lost_in_code' },
];

export const mockedHouseholds: Household[] = [
  { id: 1, name: 'ResidentEvil', code: 'RE6666' },
  { id: 2, name: 'Greveholm', code: 'GH1234' },
];

export const mockedHouseholdMembers: HouseholdMember[] = [
  {
    id: 1,
    userId: 1,
    householdId: 1,
    avatar: '1.png',
    owner: true,
    isActive: true,
    isRequest: false,
  },
  {
    id: 2,
    userId: 2,
    householdId: 1,
    avatar: '2.png',
    owner: false,
    isActive: true,
    isRequest: false,
  },
  {
    id: 3,
    userId: 3,
    householdId: 2,
    avatar: '3.png',
    owner: true,
    isActive: true,
    isRequest: false,
  },
  {
    id: 4,
    userId: 4,
    householdId: 1,
    avatar: '2.png',
    owner: false,
    isActive: true,
    isRequest: false,
  },
  {
    id: 5,
    userId: 5,
    householdId: 1,
    avatar: '1.png',
    owner: false,
    isActive: true,
    isRequest: true,
  },
  {
    id: 6,
    userId: 6,
    householdId: 2,
    avatar: '3.png',
    owner: false,
    isActive: true,
    isRequest: false,
  },
  {
    id: 7,
    userId: 7,
    householdId: 2,
    avatar: '2.png',
    owner: false,
    isActive: true,
    isRequest: true,
  },
  {
    id: 8,
    userId: 8,
    householdId: 1,
    avatar: '1.png',
    owner: false,
    isActive: true,
    isRequest: false,
  },
  {
    id: 9,
    userId: 9,
    householdId: 2,
    avatar: '3.png',
    owner: false,
    isActive: true,
    isRequest: false,
  },
];

export const mockedChores: Chore[] = [
  {
    id: 1,
    title: 'Klappe kattn',
    description: 'Glöm int å klappe kattn',
    interval: 2,
    energyWeight: 3,
    householdId: 1,
  },
  {
    id: 2,
    title: 'Vacuuming',
    description: 'Vacuum everything and everyone',
    interval: 3,
    energyWeight: 4,
    householdId: 1,
  },
  {
    id: 3,
    title: 'Pilla naveln',
    description: 'Pilla i naveln på alla i hushållet',
    interval: 7,
    energyWeight: 2,
    householdId: 2,
  },
];
