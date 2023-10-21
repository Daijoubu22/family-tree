import { Node } from 'reactflow';
import { Person } from '@/modules/FamilyTree/models/Person.ts';

const getPersonNode = (person: Person): Node => ({
  id: person.id.toString(),
  type: 'person',
  position: {
    x: 0,
    y: 0,
  },
  data: {
    person,
  },
});

export default getPersonNode;
