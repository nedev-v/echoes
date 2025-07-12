import { FaMicrophone, FaStop } from "react-icons/fa";
import { useRecorder } from "../hooks/useRecorder";

export const RecordButton = () => {

    const { start, stop, url, status } = useRecorder();

    return(
        <div className="w-full flex justify-center items-center">
            {status !== "recording" ? (
                <button onClick={start} className="inline-flex p-8 bg-black rounded-full text-white hover:cursor-pointer">
                    <FaMicrophone size={36} />
                </button>
            ) : (
                <button onClick={stop} className="inline-flex p-8 bg-red-600 rounded-full text-white hover:cursor-pointer">
                    <FaStop size={36} />
                </button>
            )}
            {url && 
            <div className="w-full rounded-lg border p-4 bg-gray-900">
                <audio controls className="w-full">
                    <source src={url} type="audio/webm" />
                    Your browser does not support the audio element.
                </audio>
            </div>}
        </div>
    )
}