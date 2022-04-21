import DownArrow from "@/assets/raw/down-arrow.svg";
import LanguageIcon from "@/assets/raw/exercism-language-icon.svg";
import { useTrackSelector } from "@/hooks/useTrackSelector";

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
      className="testimonials__container__header__language-select flex-row-align"
    >
      <img
        src={
          track === ""
            ? LanguageIcon
            : `https://dg8krxphbh767.cloudfront.net/tracks/${track}.svg`
        }
        width="42px"
      />
      <img src={DownArrow} className={isOpen ? "--is-open" : ""} width="13px" />
    </button>
  );
}
