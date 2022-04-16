// import redDot from "@/assets/raw/red-dot.svg";
import RedDot from "../RedDot";
import { useCallback, useState } from "react";
interface Props {
  src: string;
}
export default function IndicatorToggleButton({ src }: Props) {
  let init = Math.random()  > .5; 
  const [toggle, setToggle] = useState(init);
  const handleClick = useCallback(()=>{setToggle((t) => !t)},[])
  return (
    <button
      className="nav-bar__indicator-button"
      onClick={handleClick}
    >
      {toggle && (
        <RedDot
          className="nav-bar__indicator-button__red-dot"
          size="8px"
          bordered
        />
      )}
      <img src={src} />
    </button>
  );
}
