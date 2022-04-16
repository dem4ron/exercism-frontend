import customSvgProps from "./interface";

const SvgAlarmBell = ({strokeColor="black"}:customSvgProps) => (
  <svg
    width={19}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <path
      d="M7.75 20.031a1.826 1.826 0 0 0 3.504 0M9.5 3.625V1.656"
      stroke={strokeColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M9.5 3.625a6.562 6.562 0 0 1 6.563 6.563c0 6.165 1.312 7.218 1.312 7.218H1.625s1.313-1.676 1.313-7.218A6.562 6.562 0 0 1 9.5 3.625Z"
      stroke={strokeColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgAlarmBell;
