import { Handle, Position } from 'reactflow';
import { Card } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      <Card
        className="w-full h-full shadow-lg"
        size="small"
        bodyStyle={{ height: '100%' }}
      >
        <div className="flex h-full justify-center items-center">
          <FontAwesomeIcon
            color="#fc4f83"
            icon="heart"
            beatFade
            className="w-5 h-5"
          />
        </div>
      </Card>
      <Handle type="source" position={Position.Bottom} isConnectable={false} />
    </div>
  );
}

export default MarriageNode;
