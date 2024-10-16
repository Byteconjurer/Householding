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
