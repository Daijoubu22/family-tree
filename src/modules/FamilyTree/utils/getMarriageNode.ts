import { Node } from 'reactflow';
import { Person } from '@/modules/FamilyTree/models/Person.ts';

const getMarriageNode = (firstPerson: Person, secondPerson: Person): Node => ({
  id: `${firstPerson.id}_${secondPerson.id}`,
  type: 'marriage',
  position: {
    x: 0,
    y: 0,
  },
  data: {},
});

export default getMarriageNode;
