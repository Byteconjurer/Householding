import {
  AvatarType,
  Chore,
  ChoreCompletedData,
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

export const mockedChoresCompleted: ChoreCompletedData[] = [
  // Entries for this week (5 entries per member, dated from "2024-10-30" to "2024-11-03")
  {
    choreId: '2rsTHGhTmL4cs3d2wBWX',
    householdMemberId: '4HLx6YlamNl4Ly0HuPyR',
    choreComplete: '20241030',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: '5KwSFjpAlaxGsIE6az9Z',
    householdMemberId: 'WCgc9lOYDLESZEqow7h1',
    choreComplete: '20241031',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'HDQ6Kxjk5VSACxNZaf0p',
    householdMemberId: 'oOJb6URavXcyotlfSDsR',
    choreComplete: '20241001',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'iSSYmIkHF2Svm0gHZBP5',
    householdMemberId: 'pf3v36Yn6pAPfW4dVapz',
    choreComplete: '20241002',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'WvcfuSKNtHJNEFSCkjq8',
    householdMemberId: '4HLx6YlamNl4Ly0HuPyR',
    choreComplete: '20241003',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'WvcfuSKNtHJNEFSCkjq8',
    householdMemberId: '4HLx6YlamNl4Ly0HuPyR',
    choreComplete: '20241031',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'S5h6NxWJIf6Dxeghu4Bb',
    householdMemberId: 'WCgc9lOYDLESZEqow7h1',
    choreComplete: '20241031',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: '2rsTHGhTmL4cs3d2wBWX',
    householdMemberId: 'oOJb6URavXcyotlfSDsR',
    choreComplete: '20241031',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: '5KwSFjpAlaxGsIE6az9Z',
    householdMemberId: 'pf3v36Yn6pAPfW4dVapz',
    choreComplete: '20241031',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'HDQ6Kxjk5VSACxNZaf0p',
    householdMemberId: '4HLx6YlamNl4Ly0HuPyR',
    choreComplete: '20241001',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'iSSYmIkHF2Svm0gHZBP5',
    householdMemberId: 'WCgc9lOYDLESZEqow7h1',
    choreComplete: '20241001',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'WvcfuSKNtHJNEFSCkjq8',
    householdMemberId: 'oOJb6URavXcyotlfSDsR',
    choreComplete: '20241001',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'S5h6NxWJIf6Dxeghu4Bb',
    householdMemberId: 'pf3v36Yn6pAPfW4dVapz',
    choreComplete: '20241001',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },

  // Entries for last week (5 entries per member, dates ranging from "20241023" to "20241027")
  {
    choreId: 'S5h6NxWJIf6Dxeghu4Bb',
    householdMemberId: 'WCgc9lOYDLESZEqow7h1',
    choreComplete: '20241023',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: '2rsTHGhTmL4cs3d2wBWX',
    householdMemberId: 'oOJb6URavXcyotlfSDsR',
    choreComplete: '20241024',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: '5KwSFjpAlaxGsIE6az9Z',
    householdMemberId: 'pf3v36Yn6pAPfW4dVapz',
    choreComplete: '20241025',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'HDQ6Kxjk5VSACxNZaf0p',
    householdMemberId: '4HLx6YlamNl4Ly0HuPyR',
    choreComplete: '20241026',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'iSSYmIkHF2Svm0gHZBP5',
    householdMemberId: 'WCgc9lOYDLESZEqow7h1',
    choreComplete: '20241027',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'S5h6NxWJIf6Dxeghu4Bb',
    householdMemberId: 'WCgc9lOYDLESZEqow7h1',
    choreComplete: '20241023',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: '2rsTHGhTmL4cs3d2wBWX',
    householdMemberId: 'oOJb6URavXcyotlfSDsR',
    choreComplete: '20241024',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: '5KwSFjpAlaxGsIE6az9Z',
    householdMemberId: 'pf3v36Yn6pAPfW4dVapz',
    choreComplete: '20241025',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'HDQ6Kxjk5VSACxNZaf0p',
    householdMemberId: '4HLx6YlamNl4Ly0HuPyR',
    choreComplete: '20241026',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'iSSYmIkHF2Svm0gHZBP5',
    householdMemberId: 'WCgc9lOYDLESZEqow7h1',
    choreComplete: '20241027',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'HDQ6Kxjk5VSACxNZaf0p',
    householdMemberId: '4HLx6YlamNl4Ly0HuPyR',
    choreComplete: '20241023',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'iSSYmIkHF2Svm0gHZBP5',
    householdMemberId: 'WCgc9lOYDLESZEqow7h1',
    choreComplete: '20241024',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'WvcfuSKNtHJNEFSCkjq8',
    householdMemberId: 'oOJb6URavXcyotlfSDsR',
    choreComplete: '20241024',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'S5h6NxWJIf6Dxeghu4Bb',
    householdMemberId: 'pf3v36Yn6pAPfW4dVapz',
    choreComplete: '20241023',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: '2rsTHGhTmL4cs3d2wBWX',
    householdMemberId: '4HLx6YlamNl4Ly0HuPyR',
    choreComplete: '20241025',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: '5KwSFjpAlaxGsIE6az9Z',
    householdMemberId: 'WCgc9lOYDLESZEqow7h1',
    choreComplete: '20241025',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'HDQ6Kxjk5VSACxNZaf0p',
    householdMemberId: 'oOJb6URavXcyotlfSDsR',
    choreComplete: '20241026',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },

  // Entries for the previous month (20 entries per member, dated "20240901" to "20240930")
  {
    choreId: 'WvcfuSKNtHJNEFSCkjq8',
    householdMemberId: 'oOJb6URavXcyotlfSDsR',
    choreComplete: '20240901',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'S5h6NxWJIf6Dxeghu4Bb',
    householdMemberId: 'pf3v36Yn6pAPfW4dVapz',
    choreComplete: '20240902',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: '2rsTHGhTmL4cs3d2wBWX',
    householdMemberId: '4HLx6YlamNl4Ly0HuPyR',
    choreComplete: '20240903',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: '5KwSFjpAlaxGsIE6az9Z',
    householdMemberId: 'WCgc9lOYDLESZEqow7h1',
    choreComplete: '20240904',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'HDQ6Kxjk5VSACxNZaf0p',
    householdMemberId: 'oOJb6URavXcyotlfSDsR',
    choreComplete: '20240905',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'iSSYmIkHF2Svm0gHZBP5',
    householdMemberId: 'pf3v36Yn6pAPfW4dVapz',
    choreComplete: '20240906',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'WvcfuSKNtHJNEFSCkjq8',
    householdMemberId: '4HLx6YlamNl4Ly0HuPyR',
    choreComplete: '20240907',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'S5h6NxWJIf6Dxeghu4Bb',
    householdMemberId: 'WCgc9lOYDLESZEqow7h1',
    choreComplete: '20240908',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: '2rsTHGhTmL4cs3d2wBWX',
    householdMemberId: 'oOJb6URavXcyotlfSDsR',
    choreComplete: '20240909',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: '5KwSFjpAlaxGsIE6az9Z',
    householdMemberId: 'pf3v36Yn6pAPfW4dVapz',
    choreComplete: '20240910',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'HDQ6Kxjk5VSACxNZaf0p',
    householdMemberId: '4HLx6YlamNl4Ly0HuPyR',
    choreComplete: '20240911',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'iSSYmIkHF2Svm0gHZBP5',
    householdMemberId: 'WCgc9lOYDLESZEqow7h1',
    choreComplete: '20240912',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'WvcfuSKNtHJNEFSCkjq8',
    householdMemberId: 'oOJb6URavXcyotlfSDsR',
    choreComplete: '20240913',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'S5h6NxWJIf6Dxeghu4Bb',
    householdMemberId: 'pf3v36Yn6pAPfW4dVapz',
    choreComplete: '20240914',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: '2rsTHGhTmL4cs3d2wBWX',
    householdMemberId: '4HLx6YlamNl4Ly0HuPyR',
    choreComplete: '20240915',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: '5KwSFjpAlaxGsIE6az9Z',
    householdMemberId: 'WCgc9lOYDLESZEqow7h1',
    choreComplete: '20240916',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'HDQ6Kxjk5VSACxNZaf0p',
    householdMemberId: 'oOJb6URavXcyotlfSDsR',
    choreComplete: '20240917',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'iSSYmIkHF2Svm0gHZBP5',
    householdMemberId: 'pf3v36Yn6pAPfW4dVapz',
    choreComplete: '20240918',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'WvcfuSKNtHJNEFSCkjq8',
    householdMemberId: '4HLx6YlamNl4Ly0HuPyR',
    choreComplete: '20240919',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'S5h6NxWJIf6Dxeghu4Bb',
    householdMemberId: 'WCgc9lOYDLESZEqow7h1',
    choreComplete: '20240920',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'WvcfuSKNtHJNEFSCkjq8',
    householdMemberId: '4HLx6YlamNl4Ly0HuPyR',
    choreComplete: '20240931',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'S5h6NxWJIf6Dxeghu4Bb',
    householdMemberId: 'WCgc9lOYDLESZEqow7h1',
    choreComplete: '20240931',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: '2rsTHGhTmL4cs3d2wBWX',
    householdMemberId: 'oOJb6URavXcyotlfSDsR',
    choreComplete: '20240931',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: '5KwSFjpAlaxGsIE6az9Z',
    householdMemberId: 'pf3v36Yn6pAPfW4dVapz',
    choreComplete: '20240931',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'HDQ6Kxjk5VSACxNZaf0p',
    householdMemberId: '4HLx6YlamNl4Ly0HuPyR',
    choreComplete: '20240901',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'iSSYmIkHF2Svm0gHZBP5',
    householdMemberId: 'WCgc9lOYDLESZEqow7h1',
    choreComplete: '20240901',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'WvcfuSKNtHJNEFSCkjq8',
    householdMemberId: 'oOJb6URavXcyotlfSDsR',
    choreComplete: '20240901',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'S5h6NxWJIf6Dxeghu4Bb',
    householdMemberId: 'pf3v36Yn6pAPfW4dVapz',
    choreComplete: '20240901',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: '2rsTHGhTmL4cs3d2wBWX',
    householdMemberId: '4HLx6YlamNl4Ly0HuPyR',
    choreComplete: '20240902',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: '5KwSFjpAlaxGsIE6az9Z',
    householdMemberId: 'WCgc9lOYDLESZEqow7h1',
    choreComplete: '20240902',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'HDQ6Kxjk5VSACxNZaf0p',
    householdMemberId: 'oOJb6URavXcyotlfSDsR',
    choreComplete: '20240902',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'iSSYmIkHF2Svm0gHZBP5',
    householdMemberId: 'pf3v36Yn6pAPfW4dVapz',
    choreComplete: '20240902',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'WvcfuSKNtHJNEFSCkjq8',
    householdMemberId: '4HLx6YlamNl4Ly0HuPyR',
    choreComplete: '20240903',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: 'S5h6NxWJIf6Dxeghu4Bb',
    householdMemberId: 'WCgc9lOYDLESZEqow7h1',
    choreComplete: '20240903',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: '2rsTHGhTmL4cs3d2wBWX',
    householdMemberId: 'oOJb6URavXcyotlfSDsR',
    choreComplete: '20240903',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
  {
    choreId: '5KwSFjpAlaxGsIE6az9Z',
    householdMemberId: 'pf3v36Yn6pAPfW4dVapz',
    choreComplete: '20240903',
    householdId: 'FC2fWEId61cBQjfPtzxC',
  },
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
