import { useResults } from "@/hooks";
import { useTrackSelector } from "@/hooks/useTrackSelector";
import { TrackRadio } from "./TrackRadio";

export function TrackSelector({ toggleIsOpen }: { toggleIsOpen: () => void }) {
  const { results } = useResults();
  const { track, setTrack } = useTrackSelector();

  return (
    <div className="testimonials__track-selector">
      {results &&
        results.tracks.map((i) => (
          <TrackRadio
            selected={track === i}
            onTrackSelect={() => {setTrack(i);toggleIsOpen()}}
            slug={i}
            trackCount={results.track_counts}
          />
        ))}
    </div>
  );
}
