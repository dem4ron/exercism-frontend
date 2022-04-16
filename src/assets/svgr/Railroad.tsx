import { SECONDARY_COLOR } from "@/theme";
import customSvgProps from "./interface";

const SvgRailroad = ({width=22, height=24, strokeColor=SECONDARY_COLOR}:customSvgProps) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.5.763v22.5M16 .763v22.5M1 4.513h19.5v5.25H1zM1 15.013h19.5v5.25H1z"
      stroke={strokeColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgRailroad;
