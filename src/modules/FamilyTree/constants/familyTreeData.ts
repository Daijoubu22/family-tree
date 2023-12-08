export const familyTreeData = {
  persons: [
    {
      id: 1,
      firstName: 'Олексий',
      lastName: 'Трибунский',
      gender: 'male',
    },
    {
      id: 2,
      firstName: 'Елена',
      lastName: 'Трибунская',
      gender: 'male',
    },
    {
      id: 3,
      firstName: 'Роман',
      gender: 'male',
      lastName: 'Трибунский',
    },
  ],
  relations: [
    {
      id: 1,
      type: 'child',
      person1: 1,
      person2: 2,
    },
    {
      id: 2,
      type: 'child',
      person1: 1,
      person2: 3,
    },
  ],
};
