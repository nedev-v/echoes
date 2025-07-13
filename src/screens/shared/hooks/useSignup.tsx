import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase";

export const useAuth = () => {
    const signup = async (email: string, password: string, username: string) => {
        const userCred = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCred.user;
        await updateProfile(user, {displayName: username});
        
        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            username,
            email,
            followers: [],
            folowing: [],
            echoes: [],
        });
    } 

    const login = async (email: string, password: string) => {
        try{
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('Logged in user:', user);
        } catch (error) {
            console.error('Login error:', error.message);
        }
    }

    async function fetchUserProfile(uid: string) {
        try {
            const userDocRef = doc(db, "users", uid);
            const docSnap = await getDoc(userDocRef);

            if (docSnap.exists()) {
                return docSnap.data(); // returns the user object
            } else {
                console.log("No such user document!");
                return null;
            }
        } catch (error) {
            console.error("Error fetching user profile:", error);
            return null;
        }
    }

    return { signup, login, fetchUserProfile };

}