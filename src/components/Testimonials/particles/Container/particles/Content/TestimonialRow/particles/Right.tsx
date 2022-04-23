import { memo } from "react";
import { getTimeDifference } from "./getTimeDifference";
import RightCaret from "@/assets/raw/right-caret.svg";
import Image from "@/components/Common/Image";

function _Right({ date }: { date: string }) {
  return (
    <div className="flex-row-align testimonial-row--right">
      <div>{getTimeDifference(date)}</div>
      <Image src={RightCaret} alt="right caret" width="16px" height="18px" />
    </div>
  );
}

export const Right = memo(_Right);
