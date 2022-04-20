import { getTimeDifference } from "./getTimeDifference";
import RightCaret from '@/assets/raw/right-caret.svg';
export function Right({ date }: { date: string }) {
  return (
    <div className="flex-row-align testimonial-row--right">
      <div>{getTimeDifference(date)}</div>
      <img src={RightCaret}/>
    </div>
  );
}
