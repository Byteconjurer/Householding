type Chores = {
  name: string;
  id: string;
  description: string;
};

export const chores: Chores[] = [
  {
    name: 'Clean',
    id: 'clean',
    description:
      'Clean the house, do the dishes, and make sure everything is in order.',
  },
  {
    name: 'Dust',
    id: 'dust',
    description: 'Dust the outlets, the furniture, and the baseboards.',
  },
  {
    name: 'Walk the dog',
    id: 'dog',
    description:
      'Take the dog for a walk, make sure it get some exercise. He is fat',
  },
  {
    name: 'Lick the toilet seat',
    id: 'bathroom',
    description:
      'Make sure the toilet is squiky clean, and the seat is licked clean.',
  },
];
