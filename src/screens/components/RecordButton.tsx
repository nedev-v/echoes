import { FaMicrophone, FaStop } from "react-icons/fa";
import { useRecorder } from "../shared/hooks/useRecorder";

export const RecordButton = ({start, stop, status}) => {

    return(
        <div className="w-full flex flex-col justify-center items-center gap-2">
            {status !== "recording" ? (
                <button onClick={start} className="inline-flex p-6 bg-black rounded-full text-white hover:cursor-pointer border-2 border-[#F9F9F9]">
                    <FaMicrophone size={24} />
                </button>
            ) : (
                <button onClick={stop} className="inline-flex p-6 bg-red-600 rounded-full text-white hover:cursor-pointer">
                    <FaStop size={24} />
                </button>
            )}
        </div>
    )
}