export type User = {
  id: number;
  name: string;
  password: string;
};

export type HouseholdMember = {
  id: number;
  userId: number;
  householdId: number;
  avatar: string;
  owner: boolean;
  isActive: boolean;
  isRequest: boolean;
};

export type Household = {
  id: number;
  name: string;
  code: string;
};

export type Chore = {
  id: number;
  title: string;
  description: string;
  interval: number;
  energyWeight: number;
  householdId: number;
};
