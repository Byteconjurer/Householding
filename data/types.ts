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

export type AvatarImageKeys =
  | '1.png'
  | '2.png'
  | '3.png'
  | '4.png'
  | '5.png'
  | '6.png'
  | '7.png'
  | '8.png';
