import { Handle, Position } from 'reactflow';
import { Card, CardBody } from '@nextui-org/react';
import {
  MARRIAGE_NODE_HEIGHT,
  MARRIAGE_NODE_WIDTH,
} from '@/modules/FamilyTree/constants/dimensions';

function MarriageNode() {
  return (
    <div
      style={{
        width: `${MARRIAGE_NODE_WIDTH}px`,
        height: `${MARRIAGE_NODE_HEIGHT}px`,
      }}
    >
      <Handle type="target" position={Position.Top} isConnectable={false} />
      <Card className="w-full h-full">
        <CardBody className="flex justify-center items-center">
          <span className="text-sm m-0">L</span>
        </CardBody>
      </Card>
      <Handle type="source" position={Position.Bottom} isConnectable={false} />
    </div>
  );
}

export default MarriageNode;
