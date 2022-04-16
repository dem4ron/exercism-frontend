import {
  Brand,
  NavButtons,
  UserMenu,
  IndicatorButtons,
  NotificationBell,
  Reputation
} from "./particles";
import "./index.css";

export default function Navbar() {
  return (
    <div className="nav-bar">
      <div className="flex-row-align nav-bar--left">
        <Brand />
        <NavButtons />
      </div>
      <div className="flex-row-align nav-bar--right">
        <IndicatorButtons />
        <NotificationBell />
        <Reputation/>
        <UserMenu />
      </div>
    </div>
  );
}
