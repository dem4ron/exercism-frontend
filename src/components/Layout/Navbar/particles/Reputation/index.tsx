import reputationBadge from "@/assets/raw/repu-badge.svg";
import { useCallback, useState } from "react";
import RedDot from "../RedDot";
export function Reputation() {
  const [counter, setCounter] = useState(0);
  const handleClick = useCallback(()=>{setCounter(c=>c+=100)},[])
  return (
    <div tabIndex={0} className="nav-bar__reputation-button non-selectable" onClick={handleClick}>
      <div className="nav-bar__reputation-button__inner-bg">
        <img src={reputationBadge} />
        <span>{counter>=1000? `${counter/1000}K`:counter}</span>
      </div>
      <RedDot
        size={"18px"}
        className="nav-bar__reputation-button__red-dot"
        bordered
      />
    </div>
  );
}
