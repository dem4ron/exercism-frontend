import DownArrow from "@/assets/raw/down-arrow.svg";
import LanguageIcon from "@/assets/raw/exercism-language-icon.svg";
import { useTrackSelector } from "@/hooks";

export function LanguageSelectButton({
  toggleIsOpen,
  isOpen,
}: {
  isOpen: boolean;
  toggleIsOpen: () => void;
}) {
  const [track] = useTrackSelector();
  return (
    <button
      onClick={toggleIsOpen}
      aria-label="lang-select-button"
      className="testimonials__container__header__language-select flex-row-align"
    >
      <img
        alt="exercism smiling language select"
        src={
          track === ""
            ? LanguageIcon
            : `https://dg8krxphbh767.cloudfront.net/tracks/${track}.svg`
        }
        width="42px"
      />
      <img
        src={DownArrow}
        alt="down arrow"
        className={`lang-select-down-arrow ${isOpen ? "--is-open" : ""}`}
        width="13px"
      />
    </button>
  );
}
