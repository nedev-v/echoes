import { onAuthStateChanged, type User } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../../../firebase";


const AuthContext = createContext<User | null>(null);

export function AuthProvider({ children }){
    const [user, setUser] = useState<User | null>(null);
    
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        setUser(firebaseUser);
    });
    return unsubscribe;
    }, []);

    return <AuthContext.Provider value={user}>
        {children}
    </AuthContext.Provider>
}