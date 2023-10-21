import { Handle, Position } from 'reactflow';
import { Button, Card, CardBody, Input, Tooltip } from '@nextui-org/react';

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
      style={{
        width: `${PERSON_NODE_WIDTH}px`,
        height: `${PERSON_NODE_HEIGHT}px`,
      }}
    >
      <Handle type="target" position={Position.Top} />
      <Card className="w-full h-full">
        <CardBody className="flex flex-col gap-4">
          <Input label="Имя" value={data.person?.firstName} />
          <Tooltip
            content="Добавить родственника"
            placement="bottom"
            delay={200}
            closeDelay={0}
          >
            <Button
              color="primary"
              variant="shadow"
              onClick={() => setCurrentPerson(data.person)}
            >
              Добавить
            </Button>
          </Tooltip>
        </CardBody>
      </Card>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default PersonNode;
