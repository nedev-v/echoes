import { useForm } from "react-hook-form";
import { Button } from "../../components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { useRecorder } from "../shared/hooks/useRecorder";
import { AudioMessage } from "./AudioMessage";
import { RecordButton } from "./RecordButton";
import { useState } from "react";

export function CreateVoiceDialog(){
    const { start, stop, url, status } = useRecorder();
    const {handleSubmit, register, formState: { errors }} = useForm();
    const [allErrors, setErrors] = useState<string[]>([]);

    const onSubmit = (data) => {
        if(url){
            console.log(data);
            console.log(url);
        }else{
            setErrors(["Please, record an audio first.", ...errors])
        }
    }


    return(
            <Dialog>
                <DialogTrigger asChild className="w-full">
                    <Button variant="outline" className="w-full hover:cursor-pointer">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent className="bg-[#020202] border-2 border-dashed flex flex-col justify-between">
                    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                    <DialogHeader className="sm:text-center text-center py-2 text-[#F9F9F9] flex justify-start gap-1 height-fit">
                        <DialogTitle className="text-2xl">Create Voice</DialogTitle>
                        <DialogDescription className="px-8 text-center">
                            Share your voice with the world. Create an audio content that can inspire millions.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-2">
                            <Label htmlFor="caption" className="text-[#F9F9F9]">Caption</Label>
                            <Textarea 
                                {...register("caption", { required: true })}
                                id="caption"
                                name="caption"
                                placeholder="Write here a catchy caption for your voice!"    
                                className="bg-[#0F1011] text-[#F9F9F9] h-32"
                            />
                    </div>
                    <div className="flex flex-col gap-2">
                        {url && 
                            <div className="w-full rounded-lg border p-4">
                                <AudioMessage audioUrl={url}/>
                            </div>
                        }
                        <RecordButton start={start} stop={stop} status={status}/>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild className="">
                            <Button variant="outline" className="hover:cursor-pointer">Cancel</Button>
                        </DialogClose>
                        <Button type="submit" className="hover:cursor-pointer">Post</Button>
                    </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        
    )
}