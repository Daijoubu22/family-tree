// export const familyTreeData = {
//   persons: [
//     {
//       id: 1,
//       firstName: 'Олексий',
//       gender: 'male',
//     },
//     {
//       id: 2,
//       firstName: 'Елена',
//       gender: 'male',
//     },
//     {
//       id: 3,
//       firstName: 'Роман',
//       gender: 'male',
//     },
//     {
//       id: 4,
//       firstName: 'Владимир',
//       gender: 'male',
//     },
//     {
//       id: 5,
//       firstName: 'Людмила',
//       gender: 'male',
//     },
//     {
//       id: 6,
//       firstName: 'Юрий',
//       gender: 'male',
//     },
//     {
//       id: 7,
//       firstName: 'Кто-то',
//       gender: 'male',
//     },
//   ],
//   relations: [
//     {
//       id: 1, type: 'child', person1: 1, person2: 2,
//     },
//     {
//       id: 2, type: 'child', person1: 1, person2: 3,
//     },
//     {
//       id: 3, type: 'child', person1: 2, person2: 5,
//     },
//     {
//       id: 4, type: 'child', person1: 2, person2: 6,
//     },
//     {
//       id: 5, type: 'child', person1: 4, person2: 2,
//     },
//     {
//       id: 6, type: 'child', person1: 4, person2: 3,
//     },
//     {
//       id: 7, type: 'child', person1: 7, person2: 2,
//     },
//     {
//       id: 8, type: 'child', person1: 7, person2: 3,
//     },
//   ],
// };

export const familyTreeData = {
  persons: [
    {
      id: 1,
      firstName: 'Олексий',
      gender: 'male',
    },
    {
      id: 2,
      firstName: 'Елена',
      gender: 'male',
    },
    {
      id: 3,
      firstName: 'Роман',
      gender: 'male',
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
