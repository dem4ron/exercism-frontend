interface Props {
  slug: string;
  trackCount: { [key: string]: number };
  selected: boolean;
  onTrackSelect: () => void;
}
export function TrackRadio({
  slug,
  trackCount,
  selected,
  onTrackSelect,
}: Props) {
  return (
    <div
      className={`flex-row-align track-radio ${selected ? "--selected" : ""}`}
      onClick={onTrackSelect}
    >
      <div className="flex-row-align">
        <input checked={selected} type="radio" value={slug} />

        <img
          width="42px"
          src={`https://dg8krxphbh767.cloudfront.net/tracks/${slug}.svg`}
        />
        <label htmlFor={slug}>{capitalize(slug)}</label>
      </div>
      <div className="testimonials__header__counter">{trackCount[slug]}</div>
    </div>
  );
}

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
