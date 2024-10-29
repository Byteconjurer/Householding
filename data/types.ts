import { ImageSourcePropType } from 'react-native';

export type User = {
  uid: string;
};

export type HouseholdMember = {
  id: string;
  userId: string;
  householdId: string;
  avatar: string;
  name: string;
  owner: boolean;
  isActive: boolean;
  isRequest: boolean;
};

export type Household = {
  id: string;
  name: string;
  code: string;
};

export type Chore = {
  id: string;
  title: string;
  description: string;
  interval: number;
  energyWeight: number;
  householdId: string;
};

export type AvatarType = {
  icon: ImageSourcePropType;
  color: string;
};

export type ChoreCompleted = {
  id: string;
  choreId: string;
  householdMemberId: string;
  choreComplete: string;
  householdId: string;
};

export type HouseholdData = Omit<Household, 'id'>;
export type HouseholdMemberData = Omit<HouseholdMember, 'id'>;
export type ChoreData = Omit<Chore, 'id'>;
export type ChoreCompletedData = Omit<ChoreCompleted, 'id'>;
