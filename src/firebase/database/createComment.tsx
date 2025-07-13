import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import type { Comment } from "../../types";


export async function createComment(voiceId: string, comment: Comment){
    try{
        const commentRef = collection(db, "voices", voiceId, "comments");

        const newComment = await addDoc(commentRef, {
            voiceId,
            ...comment,
        });
        return newComment.id;
    } catch (err) {
        console.error("Failed to add comment:", err);
    }
    
    
}