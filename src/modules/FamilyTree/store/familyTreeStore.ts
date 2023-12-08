import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { Person } from '@/modules/FamilyTree/models/Person';
import { Relation } from '@/modules/FamilyTree/models/Relation';
import { AddPersonFormData } from '@/modules/FamilyTree/models/AddPersonFormData.ts';

export interface FamilyTreeState {
  persons: Person[];
  relations: Relation[];
  currentPerson: Person | null;
  setPersons: (person: Person[]) => void;
  addPerson: (personData: AddPersonFormData, relatedPerson: Person) => void;
  setRelations: (relations: Relation[]) => void;
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

    setRelations: (relations) =>
      set((state) => {
        state.relations = relations;
      }),

    setCurrentPerson: (person) =>
      set((state) => {
        state.currentPerson = person;
      }),

    addPerson: (personData, relatedPerson) =>
      set((state) => {
        const personId = Date.now();
        const relation: Relation = {
          id: Date.now(),
          person1: personId,
          person2: relatedPerson.id,
          type: personData.relation,
        };
        const person: Person = {
          id: personId,
          firstName: personData.firstName || '???',
          lastName: personData.lastName,
          gender: personData.gender,
        };
        state.persons.push(person);
        state.relations.push(relation);
      }),
  }))
);
