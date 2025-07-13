import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";

export async function uploadAudioFile(file: File, userId: string){
    try{
        const storageRef = ref(storage, `audio/${userId}/${file.name}`);
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
        return downloadURL;
    }catch(error){
        console.error('Error uploading audio file:', error.message);
    }
}