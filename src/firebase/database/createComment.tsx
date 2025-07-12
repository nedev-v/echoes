import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";


export async function createComment(voiceId: string, userId: string, comment: Comment){
    try{
        const commentRef = collection(db, "voices", voiceId, "comments");

        const newComment = await addDoc(commentRef, {
            voiceId,
            userId,
            ...comment,
        });
        return newComment.id;
    } catch (err) {
        console.error("Failed to add comment:", err);
    }
    
    
}