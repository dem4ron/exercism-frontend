import { SECONDARY_COLOR } from "@/theme";
import customSvgProps from "./interface";

const SvgDashboard = ({
  width = 24,
  height = 24,
  strokeColor = SECONDARY_COLOR,
  className
}: customSvgProps) => (
  <svg
    width={width}
    
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M12 23.25c6.213 0 11.25-5.037 11.25-11.25S18.213.75 12 .75.75 5.787.75 12 5.787 23.25 12 23.25Z"
      stroke={strokeColor}
      className={className}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      className={className}
      clipRule="evenodd"
      d="M12 12.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM16.5 17.25a1.5 1.5 0 0 1-1.5 1.5H9a1.5 1.5 0 0 1 0-3h6a1.5 1.5 0 0 1 1.5 1.5Z"
      stroke={strokeColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m9.178 3.498.513 1.409M4.855 7.125l1.299.75M3.875 12.683l1.478-.261M14.822 3.498l-.513 1.409M19.145 7.125 13.299 10.5M20.125 12.683l-1.478-.261"
      stroke={strokeColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgDashboard;
