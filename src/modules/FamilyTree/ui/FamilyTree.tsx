import Dagre from '@dagrejs/dagre';
import { useEffect, useMemo } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  useReactFlow,
  Node,
  Edge,
} from 'reactflow';

import 'reactflow/dist/style.css';
import PersonNode from '@/modules/FamilyTree/ui/PersonNode';
import MarriageNode from '@/modules/FamilyTree/ui/MarriageNode';
import { parseFamilyTree } from '@/modules/FamilyTree/utils/parseFamilyTree';
import { familyTreeData } from '@/modules/FamilyTree/constants/familyTreeData';

import {
  MARRIAGE_NODE_HEIGHT,
  MARRIAGE_NODE_WIDTH,
  PERSON_NODE_HEIGHT,
  PERSON_NODE_WIDTH,
} from '@/modules/FamilyTree/constants/dimensions';
import { useFamilyTreeStore } from '@/modules/FamilyTree/store/familyTreeStore';
import AddPersonModal from '@/modules/FamilyTree/ui/AddPersonModal.tsx';

const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));

const getLayoutedElements = (nodes: Node[], edges: Edge[], options) => {
  g.setGraph({ rankdir: options.direction });

  edges.forEach((edge) => g.setEdge(edge.source, edge.target));
  nodes.forEach((node) =>
    g.setNode(node.id, {
      width: PERSON_NODE_WIDTH,
      height: PERSON_NODE_HEIGHT,
    })
  );

  Dagre.layout(g);

  return {
    nodes: nodes.map((node) => {
      const a = g.node(node.id);
      let { x, y } = a;
      if (node.type === 'marriage') {
        x += (PERSON_NODE_WIDTH - MARRIAGE_NODE_WIDTH) / 2;
        y += (PERSON_NODE_HEIGHT - MARRIAGE_NODE_HEIGHT) / 2;
      }

      return { ...node, position: { x, y } };
    }),
    edges,
  };
};

function FamilyTree() {
  const persons = useFamilyTreeStore((state) => state.persons);
  const setPersons = useFamilyTreeStore((state) => state.setPersons);
  const relations = useFamilyTreeStore((state) => state.relations);
  const setRelations = useFamilyTreeStore((state) => state.setRelations);
  const { fitView } = useReactFlow();
  const [nodes, setNodes] = useNodesState([]);
  const [edges, setEdges] = useEdgesState([]);
  const nodeTypes = useMemo(
    () => ({ person: PersonNode, marriage: MarriageNode }),
    []
  );

  useEffect(() => {
    setPersons(familyTreeData.persons);
    setRelations(familyTreeData.relations);
  }, []);

  useEffect(() => {
    const [newNodes, newEdges] = parseFamilyTree(persons, relations);
    if (!newNodes.length || !newEdges.length) return;
    const direction = 'TB';
    const layouted = getLayoutedElements(newNodes, newEdges, { direction });

    setNodes([...layouted.nodes]);
    setEdges([...layouted.edges]);

    window.requestAnimationFrame(() => {
      fitView();
    });
  }, [persons, relations]);

  return (
    persons.length && (
      <>
        <AddPersonModal />
        <div
          style={{
            width: '1900px',
            height: '900px',
          }}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            fitView
          />
        </div>
      </>
    )
  );
}

export default FamilyTree;
