import { onAuthStateChanged, type User } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { useAuth } from "../hooks/useSignup";


const AuthContext = createContext<User | null>(null);

export function AuthProvider({ children }){
    const [user, setUser] = useState<User | null>(null);
    const {fetchUserProfile} = useAuth();
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            const user = firebaseUser ? await fetchUserProfile(firebaseUser.uid) as User : null;
            setUser(user);
        });
        
        console.log(user);
        return unsubscribe;
    }, []);

    return <AuthContext.Provider value={user}>
        {children}
    </AuthContext.Provider>
}

export const useUser = () => useContext(AuthContext);