import BigDownArrow from "@/assets/raw/down-arrow--big.svg";
import { memo,  useRef } from "react";

interface Props{
  sortOption:{ label: string; value: string };
  handleClick: ()=>void;
}

function _SortButton({sortOption, handleClick}:Props) {


  return (
      <button
        className="testimonials__container__header__sort-button flex-row-align"
        onClick={handleClick}
      >
        <div>{sortOption.label} </div>
        <img src={BigDownArrow} width="24px" />
      </button>

  );
}

export const SortButton = memo(_SortButton);