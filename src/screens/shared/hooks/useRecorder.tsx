import { useCallback, useRef, useState } from "react";

export function useRecorder(mimeHint = "audio/webm;codecs=opus") {
    const mediaRecRef = useRef<MediaRecorder | undefined>(undefined);
    const chunksRef = useRef<Blob[]>([]);
    const [status, setStatus] = useState<string>("inactive");
    const [url, setUrl] = useState<string | null>(null);

    const start = useCallback(async () => {
        if (status === "recording") return;

        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mime = MediaRecorder.isTypeSupported(mimeHint) ? mimeHint : "";

        const mediaRec = new MediaRecorder(stream, { mimeType: mime });
        mediaRecRef.current = mediaRec;
        chunksRef.current = [];

        mediaRec.ondataavailable = (e) => e.data.size > 0 && chunksRef.current.push(e.data);

        mediaRec.onstop = () => {
            const blob = new Blob(chunksRef.current, { type: mime });
            const uuid = crypto.randomUUID();
            const extension = mime.split('/')[1] || 'webm';
            const file = new File([blob], `${uuid}.${extension}`, { type: mime });
            //TODO: Call to the api to create a voice
            //setting preview, needed? 
            setUrl(URL.createObjectURL(blob));
        }
        
        mediaRec.start();
        setStatus("recording");
    }, [mimeHint, status]);

    const stop = useCallback(() => {
        if (status !== "recording") return;
        mediaRecRef.current?.stop();
        setStatus("inactive");
    }, [status]);

    return({ start, stop, status, url });
}

