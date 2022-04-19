import BigDownArrow from "@/assets/raw/down-arrow--big.svg";
import { memo } from "react";

interface Props{
  sortObj:{ label: string; value: string };
  handleClick: ()=>void;
}

function _SortButton({sortObj, handleClick}:Props) {


  return (
      <button
        className="testimonials__container__header__sort-button flex-row-align"
        onClick={handleClick}
      >
        <div>{sortObj.label} </div>
        <img src={BigDownArrow} width="24px" />
      </button>

  );
}

export const SortButton = memo(_SortButton);