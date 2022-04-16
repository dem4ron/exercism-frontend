import { SECONDARY_COLOR } from "@/theme";
import customSvgProps from "./interface";

const SvgToysLego = ({width=24, height=23, strokeColor=SECONDARY_COLOR}:customSvgProps) => (
  <svg
  
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.25 22.25H1.5a.75.75 0 0 1-.75-.75v-5.25M8.25 16.25H.75v-6M12.75 10.25h-12V5a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v5.25M1.5 4.25V2a.75.75 0 0 1 .75-.75H4.5a.75.75 0 0 1 .75.75v2.25M8.25 4.25V2A.75.75 0 0 1 9 1.25h2.25A.75.75 0 0 1 12 2v2.25M12 16.25V14a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 .75.75v2.25M18.75 16.25V14a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 .75.75v2.25"
      stroke={strokeColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M11.25 17a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75V17Z"
      stroke={strokeColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgToysLego;
