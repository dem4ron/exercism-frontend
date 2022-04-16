import { memo, Dispatch, SetStateAction } from "react";
import activeIndicator from "@/assets/raw/active.svg";

interface NavButtonProps {
  icon: string;
  label: string;
  selected?: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
}

function _NavButton({ icon, label, selected, setSelected }: NavButtonProps) {
  return (
    <button className="nav-bar__button" onClick={() => setSelected(label)}>
      <div className="nav-bar__button__icon">
        {selected && (
          <img
            className="nav-bar__button__icon__active-indicator"
            src={activeIndicator}
          />
        )}
        <img
          className={`nav-bar__button__icon__svg${
            selected ? "--selected" : ""
          }`}
          src={icon}
        />
      </div>
      <div className={`nav-bar__button__label${selected && "--selected"}`}>
        {label}
      </div>
    </button>
  );
}

const NavButton = memo(_NavButton);
export default NavButton;
