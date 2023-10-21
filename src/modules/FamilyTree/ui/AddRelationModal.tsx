import { Button } from '@nextui-org/react';
import AppModal from '@/global/ui/AppModal';
import { useFamilyTreeStore } from '@/modules/FamilyTree/store/familyTreeStore';
import { Person } from '@/modules/FamilyTree/models/Person.ts';
import { Relation } from '@/modules/FamilyTree/models/Relation.ts';

function AddRelationModal() {
  const setCurrentPerson = useFamilyTreeStore(
    (state) => state.setCurrentPerson
  );
  const currentPerson = useFamilyTreeStore((state) => state.currentPerson);
  const addPerson = useFamilyTreeStore((state) => state.addPerson);
  const addRelation = useFamilyTreeStore((state) => state.addRelation);

  const addFather = () => {
    const father: Person = {
      id: Date.now(),
      firstName: 'Father',
      gender: 'male',
    };
    const relation: Relation = {
      id: Date.now(),
      type: 'child',
      person1: currentPerson!.id,
      person2: father.id,
    };
    addPerson(father);
    addRelation(relation);
    setCurrentPerson(null);
  };

  const addMother = () => {
    const mother: Person = {
      id: Date.now(),
      firstName: 'Mother',
      gender: 'female',
    };
    const relation: Relation = {
      id: Date.now(),
      type: 'child',
      person1: currentPerson!.id,
      person2: mother.id,
    };
    addPerson(mother);
    addRelation(relation);
    setCurrentPerson(null);
  };

  return (
    <AppModal
      isOpen={!!currentPerson}
      onOpenChange={() => setCurrentPerson(null)}
      title={currentPerson ? currentPerson.firstName : undefined}
    >
      <Button onClick={addFather}>Добавить отца</Button>
      <Button onClick={addMother}>Добавить мать</Button>
    </AppModal>
  );
}

export default AddRelationModal;
