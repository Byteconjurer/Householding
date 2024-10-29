import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';

export const addCurrentUserToFirestore = async () => {
  const user = auth.currentUser;
  if (user) {
    const userRef = doc(db, 'User', user.uid);
    setDoc(
      userRef,
      {
        uid: user.uid,
      },
      { merge: true },
    )
      .then(() => {
        console.log('User created/updated in Firestore:', user.uid);
      })
      .catch((error) => {
        console.error('Error creating/updating user in Firestore:', error);
      });
  } else {
    console.log('No user is currently signed in.');
  }
};
