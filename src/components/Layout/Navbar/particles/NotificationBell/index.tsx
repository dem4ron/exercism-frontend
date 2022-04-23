import { useMemo } from "react";
import { useCounter } from "@/hooks";
import RedDot from "../RedDot";
import bell from "@/assets/raw/alarm-bell.svg";

export function NotificationBell() {
  const [counter, increment] = useCounter();
  const ringing = useMemo(() => counter > 0, [counter]);

  return (
    <button
      onClick={increment}
      className={`nav-bar__notification-bell${ringing ? "--ringing" : ""}`}
    >
      {ringing && (
        <RedDot
          size="24px"
          inside={`${counter > 99 ? "99+" : counter}`}
          className="nav-bar__notification-bell__red-dot"
        />
      )}
      <img width="19px" height="23px" alt="notification bell" src={bell} />
    </button>
  );
}
