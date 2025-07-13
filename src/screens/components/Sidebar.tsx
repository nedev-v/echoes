import { IoHomeOutline } from "react-icons/io5"
import { Button } from "../../components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { SECONDARY_COLOR, SECONDARY_COLOR_RGB } from "../../const"
import { useUser } from "../shared/contexts/AuthContext"
import { CreateVoiceDialog } from "./CreateVoiceDoalog"


export function Sidebar() {
    const user = useUser();
    
    return (
            <aside className="px-8 absolute left-0 top-12 bottom-12 w-1/5 flex flex-col justify-between pt-16 ml-12 rounded-lg" style={{border: `1px solid ${SECONDARY_COLOR_RGB}`}}>
                <div className="w-full flex flex-col items-center">
                <img src="/Logo.png" alt="" className="w-24 mb-12"/>
                <div className="flex justify-between flex-col items-center w-full gap-4">
                    <Button variant="outline" size="lg" className="w-full hover:cursor-pointer">
                    <IoHomeOutline/> Home
                    </Button>
                    <Button variant="outline" size="lg" className="w-48 hover:cursor-pointer w-full">
                    <IoHomeOutline /> Home
                    </Button>
                    <CreateVoiceDialog />
                </div>
                </div>
                <div 
                    className="flex w-full self-end gap-2 items-center px-4 py-2 rounded-lg mb-4" 
                    style={{border: `1px dashed ${SECONDARY_COLOR_RGB}`}}
                >
                <Avatar className="size-12">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>Profile Image</AvatarFallback>
                </Avatar>
                <p className="text-lg" style={{color: SECONDARY_COLOR}}>{user ? user?.username : "NO DATA"}</p>
                </div>
            </aside>
    )
}