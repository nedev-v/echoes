import { useWavesurfer } from '@wavesurfer/react'
import { useRef, useState } from 'react'
import { SECONDARY_COLOR } from '../../const'
import { Button } from '../../components/ui/button';
import { CiPause1, CiPlay1 } from "react-icons/ci";


export function AudioMessage({audioUrl}: {audioUrl: string}){
    const containerRef = useRef(null);
    const [hasFinished, setHasFinished] = useState(false) 
    
    const { wavesurfer, isReady, isPlaying, currentTime } = useWavesurfer({
        container: containerRef,
        url: audioUrl,
        waveColor: SECONDARY_COLOR,
        height: 40,
        barRadius: 16,
        barWidth: 4
    });

    const onPlayPause = () => wavesurfer?.playPause();

  return (
    <div className="flex items-center gap-4">
      <Button
        disabled={!isReady}
        onClick={onPlayPause}
        className="w-12 h-12 p-0 rounded-full bg-[#0F1011] flex justify-center items-center hover:cursor-pointer border-1 border-[#F9F9F9]"
      >
        {isPlaying ? <CiPause1 size={28} /> : <CiPlay1 size={28} />}
      </Button>

      <div ref={containerRef} className="w-full" />

      <span className="text-xs text-muted-foreground w-12 font-medium">
        {currentTime.toFixed(1)}s
      </span>
    </div>
  )
    
}