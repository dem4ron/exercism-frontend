import IndicatorToggleButton from "./IndicatorToggleButton";
import mood from "@/assets/raw/mood-happy.svg";
import badge from "@/assets/raw/badge.svg";

export function IndicatorButtons() {
  return (
    <div className="flex-row-align">
      <IndicatorToggleButton alt="mood indicator" src={mood} />
      <IndicatorToggleButton alt="badge indicator" src={badge} />
    </div>
  );
}
