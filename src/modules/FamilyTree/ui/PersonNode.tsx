import { Handle, Position } from 'reactflow';
import { Button, Card, Avatar } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import {
  PERSON_NODE_HEIGHT,
  PERSON_NODE_WIDTH,
} from '@/modules/FamilyTree/constants/dimensions';
import { useFamilyTreeStore } from '@/modules/FamilyTree/store/familyTreeStore';
import { Person } from '@/modules/FamilyTree/models/Person';

interface Props {
  data: {
    person: Person;
  };
}

function PersonNode({ data }: Props) {
  const setCurrentPerson = useFamilyTreeStore(
    (state) => state.setCurrentPerson
  );

  return (
    <div
      className="relative flex flex-col justify-end cursor-default"
      style={{
        width: `${PERSON_NODE_WIDTH}px`,
        height: `${PERSON_NODE_HEIGHT}px`,
      }}
    >
      <Handle type="target" position={Position.Top} isConnectable={false} />
      <div className="absolute -top-2 w-full flex justify-center">
        <Avatar
          size={100}
          shape="square"
          icon={<FontAwesomeIcon icon="user" />}
          className="z-10 bg-gray-200 !rounded-xl"
        />
      </div>

      <Card className="w-full h-2/3 shadow-lg">
        <div className="flex flex-col items-center mt-4">
          <p>{data.person.firstName}</p>
          <p>{data.person.lastName}</p>
        </div>
      </Card>

      <div className="absolute -bottom-5 w-full z-10 flex justify-center">
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{
            type: 'spring',
            duration: 0.8,
          }}
        >
          <Button
            icon={<FontAwesomeIcon color="#fff" icon="plus" />}
            type="primary"
            className="shadow-lg shadow-blue-500/50"
            size="large"
            onClick={() => setCurrentPerson(data.person)}
          />
        </motion.div>
      </div>
      <Handle type="source" position={Position.Bottom} isConnectable={false} />
    </div>
  );
}

export default PersonNode;
