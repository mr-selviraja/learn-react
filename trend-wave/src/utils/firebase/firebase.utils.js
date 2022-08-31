import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB4qqnwEbfKwEKLMVBTMPcv4Mo_Fh7fsY",
  authDomain: "trend-wave-db.firebaseapp.com",
  projectId: "trend-wave-db",
  storageBucket: "trend-wave-db.appspot.com",
  messagingSenderId: "113501925512",
  appId: "1:113501925512:web:9d64e1c309830820f46f3d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Authentication
const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot);

    // Create a user doc if doesn't exist
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('Error creating the user: ', error.message);
        }
    }

    return userDocRef
} 