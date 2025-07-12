import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../../../firebase";
import { doc, setDoc } from "firebase/firestore";

export const useSignup = () => {
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
}