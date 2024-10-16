type Chores = {
  title: string;
  id: string;
  description: string;
  energyWeight: number;
  interval: number;
};

export const chores: Chores[] = [
  {
    title: 'Clean',
    id: 'clean',
    description:
      'Clean the house, do the dishes, and make sure everything is in order.',
    energyWeight: 8,
    interval: 7,
  },
  {
    title: 'Dust',
    id: 'dust',
    description: 'Dust the outlets, the furniture, and the baseboards.',
    energyWeight: 7,
    interval: 14,
  },
  {
    title: 'Walk the dog',
    id: 'dog',
    description:
      'Take the dog for a walk, make sure it get some exercise. He is fat',
    energyWeight: 4,
    interval: 1,
  },
  {
    title: 'Lick the toilet seat',
    id: 'bathroom',
    description:
      'Make sure the toilet is squiky clean, and the seat is licked clean.',
    energyWeight: 9,
    interval: 10,
  },
];
