import { useTestimonialsStore } from "@/store";
import { useCallback } from "react";

export function useTrackSelector(){
   const track = useTestimonialsStore(useCallback(store=>store.track,[]));
   const setTrack = useTestimonialsStore(useCallback(store=>store.setTrack,[]));

   return {track, setTrack};
   
}