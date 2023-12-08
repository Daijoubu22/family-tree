import { Edge, Node } from 'reactflow';
import getPersonNode from '@/modules/FamilyTree/utils/getPersonNode';
import getMarriageNode from '@/modules/FamilyTree/utils/getMarriageNode';
import getEdge from '@/modules/FamilyTree/utils/getEdge';
import { Person } from '@/modules/FamilyTree/models/Person';
import { Relation } from '@/modules/FamilyTree/models/Relation';

export const parseFamilyTree = (persons: Person[], relations: Relation[]) => {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  persons.forEach((person) => {
    nodes.push(getPersonNode(person));
  });

  const relationsCopy = [...relations];

  relationsCopy.forEach((relation) => {
    if (!relation) return;

    if (relation.type === 'child') {
      const secondRelation = relationsCopy.find(
        (_relation) =>
          _relation &&
          _relation.person1 === relation.person1 &&
          _relation.id !== relation.id
      );
      if (secondRelation) {
        // person has 2 parents
        const firstParent = persons.find(
          (person) => person.id === relation.person2
        ) as Person;
        const secondParent = persons.find(
          (person) => person.id === secondRelation.person2
        ) as Person;
        let marriageNode = nodes.find(
          (node) =>
            node.type === 'marriage' &&
            node.id.split('_')[0] === firstParent.id.toString() &&
            node.id.split('_')[1] === secondParent.id.toString()
        );
        if (!marriageNode) {
          marriageNode = getMarriageNode(firstParent, secondParent);
          nodes.push(marriageNode);
          edges.push(getEdge(firstParent.id, marriageNode.id));
          edges.push(getEdge(secondParent.id, marriageNode.id));
        }
        edges.push(getEdge(marriageNode.id, relation.person1));
        relationsCopy[relationsCopy.indexOf(relation)] = undefined;
        relationsCopy[relationsCopy.indexOf(secondRelation)] = undefined;
      } else {
        // person has 1 parent
        const parent = persons.find(
          (person) => person.id === relation.person2
        ) as Person;
        edges.push(getEdge(parent.id, relation.person1));
        relationsCopy[relationsCopy.indexOf(relation)] = undefined;
      }
    } else if (relation.type === 'parent') {
      edges.push(getEdge(relation.person1, relation.person2));
    }
  });

  return [nodes, edges];
};
