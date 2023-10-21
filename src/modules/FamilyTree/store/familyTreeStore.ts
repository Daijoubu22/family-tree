import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { Person } from '@/modules/FamilyTree/models/Person';
import { Relation } from '@/modules/FamilyTree/models/Relation';

export interface FamilyTreeState {
  persons: Person[];
  relations: Relation[];
  currentPerson: Person | null;
  setPersons: (person: Person[]) => void;
  addPerson: (person: Person) => void;
  setRelations: (relations: Relation[]) => void;
  addRelation: (relation: Relation) => void;
  setCurrentPerson: (person: Person | null) => void;
}

export const useFamilyTreeStore = create<FamilyTreeState>()(
  immer((set) => ({
    persons: [],
    relations: [],
    currentPerson: null,

    setPersons: (persons) =>
      set((state) => {
        state.persons = persons;
      }),

    addPerson: (person) =>
      set((state) => {
        state.persons.push(person);
      }),

    setRelations: (relations) =>
      set((state) => {
        state.relations = relations;
      }),

    addRelation: (relation) =>
      set((state) => {
        state.relations.push(relation);
      }),

    setCurrentPerson: (person) =>
      set((state) => {
        state.currentPerson = person;
      }),
  }))
);
