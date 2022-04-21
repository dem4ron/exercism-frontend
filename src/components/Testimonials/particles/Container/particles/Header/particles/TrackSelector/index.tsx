import { useResults, useTrackSelector } from "@/hooks";
import { TrackRadio } from "./TrackRadio";

export function TrackSelector({ toggleIsOpen }: { toggleIsOpen: () => void }) {
  const { results } = useResults();
  const [track, setTrack] = useTrackSelector();

  return (
    <div className="testimonials__track-selector">
      {results && (
        <>
          <TrackRadio
            slug=""
            selected={track === ""}
            onTrackSelect={() => {
              setTrack("");
              toggleIsOpen();
            }}
            trackCount={results.track_counts}
          />
          {results.tracks.map((i) => (
            <TrackRadio
              key={i}
              selected={track === i}
              onTrackSelect={() => {
                setTrack(i);
                toggleIsOpen();
              }}
              slug={i}
              trackCount={results.track_counts}
            />
          ))}
        </>
      )}
    </div>
  );
}
