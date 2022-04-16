import bell from "@/assets/raw/alarm-bell.svg";
import { useCallback, useState } from "react";
import RedDot from "../RedDot";

export function NotificationBell() {
  const [counter, setCounter] = useState(0);
  const ringing = counter > 0; 
  const handleClick = useCallback(() => {
    setCounter((c) => (c += 1));
  }, []);

  return (
    <button
      onClick={handleClick}
      className={`nav-bar__notification-bell${ringing?"--ringing":""}`}
    >
      {ringing && (
        <RedDot
          size="24px"
          inside={`${counter>99?"99+":counter }`}
          className="nav-bar__notification-bell__red-dot"
        />
      )}
      <img src={bell} />
    </button>
  );
}
