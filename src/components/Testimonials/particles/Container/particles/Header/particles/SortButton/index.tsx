import BigDownArrow from "@/assets/raw/down-arrow--big.svg";
import { memo } from "react";

interface Props {
  sortObj: { label: string; value: string };
  toggleIsOpen: () => void;
  isOpen: boolean;
  onBlur:()=>void
}

function _SortButton({ sortObj, toggleIsOpen, isOpen, onBlur }: Props) {
  return (
    <button
      onBlur={onBlur}
      aria-label="sort-button"
      className="testimonials__container__header__sort-button flex-row-align"
      onClick={toggleIsOpen}
    >
      <div>{sortObj.label}</div>
      <img
        src={BigDownArrow}
        alt="down arrow"
        className={isOpen ? "--is-open" : ""}
        width="24px"
      />
    </button>
  );
}

export const SortButton = memo(_SortButton);