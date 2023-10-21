import { Edge } from 'reactflow';

const getEdge = (
  sourceId: string | number,
  targetId: string | number
): Edge => ({
  id: `${sourceId}_${targetId}`,
  source: sourceId.toString(),
  target: targetId.toString(),
});

export default getEdge;
