import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export async function login(email: string, password: string){
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('Logged in user:', user);
    } catch (error) {
        console.error('Login error:', error.message);
    }
}