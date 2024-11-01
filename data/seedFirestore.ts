import { collection, doc, writeBatch } from 'firebase/firestore';
import {
  ChoreCompletedData,
  ChoreData,
  HouseholdData,
  HouseholdMemberData,
} from './types';
import { db } from '../firebase';
import {} from /*   mockedChores,
  mockedChoresCompleted,
  mockedHouseholdMembers,
  mockedHouseholds, */
'./data';

export async function addHouseholds(households: HouseholdData[]) {
  try {
    const batch = writeBatch(db);
    const collectionRef = collection(db, 'Households');
    for (const household of households) {
      const docRef = doc(collectionRef);
      batch.set(docRef, { ...household, id: docRef.id });
    }

    await batch.commit();
    console.log('Households added successfully.');
  } catch (error) {
    console.error('Error adding households: ', error);
  }
}

export async function addHouseholdMembers(members: HouseholdMemberData[]) {
  try {
    const batch = writeBatch(db);
    const collectionRef = collection(db, 'HouseholdMembers');

    for (const member of members) {
      const docRef = doc(collectionRef);
      batch.set(docRef, { ...member, id: docRef.id });
    }

    await batch.commit();
    console.log('Household members added successfully.');
  } catch (error) {
    console.error('Error adding household members: ', error);
  }
}

export async function addChores(chores: ChoreData[]) {
  try {
    const batches: { [key: string]: ReturnType<typeof writeBatch> } = {};

    for (const chore of chores) {
      const { householdId } = chore;

      if (!batches[householdId]) {
        batches[householdId] = writeBatch(db);
      }

      const choreRef = doc(collection(db, `Households/${householdId}/Chores`));
      batches[householdId].set(choreRef, { ...chore, id: choreRef.id });
    }

    for (const batch of Object.values(batches)) {
      await batch.commit();
    }

    console.log('All chores added to their respective households.');
  } catch (error) {
    console.error('Error adding chores: ', error);
  }
}

export async function addChoresCompleted(
  choresCompleted: ChoreCompletedData[],
) {
  try {
    const batches: { [key: string]: ReturnType<typeof writeBatch> } = {};

    for (const completed of choresCompleted) {
      const { householdMemberId } = completed;

      if (!batches[householdMemberId]) {
        batches[householdMemberId] = writeBatch(db);
      }

      // Reference to the subcollection within each household member
      const completedRef = doc(
        collection(db, `Householdmember/${householdMemberId}/Chorecompleted`),
      );
      batches[householdMemberId].set(completedRef, {
        ...completed,
        id: completedRef.id,
      });
    }

    // Commit all batches
    for (const batch of Object.values(batches)) {
      await batch.commit();
    }

    console.log(
      'Completed chores added to their respective household members.',
    );
  } catch (error) {
    console.error('Error adding chores completed: ', error);
  }
}
