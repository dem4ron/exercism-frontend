import BigDownArrow from "@/assets/raw/down-arrow--big.svg";
import { memo } from "react";

interface Props {
  sortObj: { label: string; value: string };
  toggleIsOpen: () => void;
  isOpen: boolean;
}

function _SortButton({ sortObj, toggleIsOpen, isOpen }: Props) {
  return (
    <button
      aria-label="sort-button"
      className="testimonials__container__header__sort-button flex-row-align"
      onClick={toggleIsOpen}
    >
      <div>{sortObj.label}</div>
      <img
        src={BigDownArrow}
        className={isOpen ? "--is-open" : ""}
        width="24px"
      />
    </button>
  );
}

export const SortButton = memo(_SortButton);
