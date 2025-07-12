import { addDoc, collection } from "firebase/firestore"
import { db } from "../../firebase"
import type { Voice } from "../../types"


export const addVoice = async ({userId, audioUrl, description}: Voice) => {
    
    const newVoice = await addDoc(collection(db, "voices"),{
        userId,
        audioUrl,
        description,
        echoes: 0,
        comments: [],
    });

    return newVoice.id;
}