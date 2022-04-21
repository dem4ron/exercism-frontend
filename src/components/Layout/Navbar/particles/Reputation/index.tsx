import reputationBadge from "@/assets/raw/repu-badge.svg";
import { useCounter } from "@/hooks";
import RedDot from "../RedDot";
export function Reputation() {
  const [counter, increment] = useCounter(100);

  return (
    <div
      tabIndex={0}
      className="nav-bar__reputation-button non-selectable"
      onClick={increment}
    >
      <div className="nav-bar__reputation-button__inner-bg">
        <img src={reputationBadge} />
        <span>{counter >= 1000 ? `${counter / 1000}K` : counter}</span>
      </div>
      <RedDot
        size={"18px"}
        className="nav-bar__reputation-button__red-dot"
        bordered
      />
    </div>
  );
}
