import { useState } from "react";
import NavButton from "./NavButton";
import { BUTTON_COLLECTION } from "./buttonCollection";

export function NavButtons() {
  const [selected, setSelected] = useState("Dashboard");
  return (
    <div className="nav-bar__button-collection">
      {BUTTON_COLLECTION.map((i) => (
        <NavButton
          key={i.label}
          label={i.label}
          icon={i.icon}
          alt={i.label + " button"}
          setSelected={setSelected}
          selected={selected === i.label}
        />
      ))}
    </div>
  );
}


