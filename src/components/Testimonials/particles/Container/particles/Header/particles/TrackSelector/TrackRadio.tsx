import LanguageIcon from "@/assets/raw/exercism-language-icon.svg";
import { useMemo } from "react";
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
  const noSlug = useMemo(() => slug === "", []);

  return (
    <div
      className={`flex-row-align track-radio ${selected ? "--selected" : ""}`}
      onClick={onTrackSelect}
    >
      <div className="flex-row-align">
        <input checked={selected} readOnly type="radio" value={slug} />

        <img
          alt="programming language icon"
          height="42px"
          width="42px"
          src={
            noSlug
              ? LanguageIcon
              : `https://dg8krxphbh767.cloudfront.net/tracks/${slug}.svg`
          }
        />
        <label htmlFor={slug}>{noSlug ? "All" : capitalize(slug)}</label>
      </div>
      <div className="testimonials__header__counter">
        {noSlug ? sumOf(trackCount): trackCount[slug]}
      </div>
    </div>
  );
}

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


function sumOf(object:{}):number{
  let values:number[] =  Object.values(object)
  return values.reduce((a:number, b:number)=>a+b);
}